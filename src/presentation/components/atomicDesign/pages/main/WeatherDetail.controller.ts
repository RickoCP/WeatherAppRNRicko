/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from 'react';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {debounce} from 'lodash';
import {getDayOrNight} from '@core/lib/getDayOrNight';
import {useWeatherDetailViewModel} from './WeatherDetail.viewModel';

export function useWeatherDetail() {
  const {
    asyncDetailWeather,
    detailWeather,
    searchWeather,
    selectedWeather,
    detailWeatherVM,
    searchWeatherVM,
    onSelectCondition,
    onSelectTerritoryVM,
    toggleSearchVM,
    handleSearch,
  } = useWeatherDetailViewModel();

  const [showSearch, setShowSearch] = useState(false);
  const [theme, setTheme] = useState('night');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await asyncDetailWeather();
    setRefreshing(false);
  };

  useEffect(() => {
    asyncDetailWeather();
  }, []);

  useEffect(() => {
    setTheme(
      getDayOrNight(
        detailWeather?.detailWeather[0]?.forecastWeather?.localtime,
      ),
    );
  }, [detailWeather]);

  const onSelectTerritory = async (
    territorySelected: ISelectedTerritoryEntity,
  ) => {
    onSelectTerritoryVM(territorySelected);
    setShowSearch(false);
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const toggleSearch = async (toggle: boolean) => {
    setShowSearch(toggle);
    toggleSearchVM(toggle);
  };

  return {
    theme,
    asyncDetailWeather,
    detailWeather,
    searchWeather,
    selectedWeather,
    detailWeatherVM,
    searchWeatherVM,
    onSelectCondition,
    onSelectTerritory,
    handleTextDebounce,
    setShowSearch,
    showSearch,
    refreshing,
    onRefresh,
    toggleSearch,
  };
}
