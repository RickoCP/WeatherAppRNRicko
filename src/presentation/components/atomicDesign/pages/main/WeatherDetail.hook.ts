/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import di from '@core/di';
import {
  IDetailWeather,
  ISearchWeather,
  ISelectedWeather,
} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {IDetailWeatherStateGroup} from '@presentation/redux/interfaces/iDetailWeather';
import DetailWeatherVM from '@presentation/vm/DetailWeather';
import {ISearchWeatherStateGroup} from '@presentation/redux/interfaces/iSearchWeather';
import SearchWeatherVM from '@presentation/vm/SearchWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {ISelectedTerritoryEntity} from '@domains/entities/interfaces/iSelectedTerritory';
import {debounce} from 'lodash';
import {ISelectedWeatherStateGroup} from '@presentation/redux/interfaces/iSelectedWaether';
import {getDayOrNight} from '@core/lib/getDayOrNight';

export function useWeatherDetail() {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [theme, setTheme] = useState('night');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await asyncDetailWeather();
    setRefreshing(false);
  };

  let detailWeather: IDetailWeather = useSelector(
    (state: IDetailWeatherStateGroup) => state.detailWeather,
  );
  let searchWeather: ISearchWeather = useSelector(
    (state: ISearchWeatherStateGroup) => state.searchWeather,
  );
  let selectedWeather: ISelectedWeather = useSelector(
    (state: ISelectedWeatherStateGroup) => state.selectedWeather,
  );

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

  const asyncDetailWeather = async () => {
    console.log('run asyncDetailWeather hook');
    dispatch(await di.detailWeather.getDetailWeatherLoading());
    dispatch(await di.detailWeather.getDetailWeather());
  };

  let detailWeatherVM = new DetailWeatherVM(
    detailWeather?.detailWeather[0],
    selectedWeather?.selectedCondition[0],
  );

  let searchWeatherVM = searchWeather?.searchWeather?.map(
    searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
  );

  const onSelectCondition = async (
    conditionSelected: ISelectedConditionEntity,
  ) => {
    console.log('run onSelectCondition hook');
    dispatch(di.detailWeather.setSelectedCondition(conditionSelected));
    detailWeatherVM = new DetailWeatherVM(
      detailWeather?.detailWeather[0],
      selectedWeather?.selectedCondition[0],
    );
  };

  const onSelectTerritory = async (
    territorySelected: ISelectedTerritoryEntity,
  ) => {
    console.log('run onSelectTerritory hook');
    di.detailWeather.setSelectedTerritory(territorySelected);
    dispatch(await di.detailWeather.getDetailWeatherLoading());
    dispatch(await di.detailWeather.getDetailWeather());
    setShowSearch(false);
    detailWeatherVM = new DetailWeatherVM(
      detailWeather?.detailWeather[0],
      selectedWeather?.selectedCondition[0],
    );

    dispatch(await di.detailWeather.resetSearchWeather());
    searchWeatherVM = searchWeather?.searchWeather?.map(
      searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
    );
  };

  const handleSearch = async (search: string) => {
    console.log('run handleSearch hook');
    if (search && search.length > 2) {
      dispatch(await di.detailWeather.getSearchWeather(search));
      searchWeatherVM = searchWeather?.searchWeather?.map(
        searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
      );
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const toggleSearch = async (toggle: boolean) => {
    setShowSearch(toggle);
    if (toggle === false) {
      dispatch(await di.detailWeather.resetSearchWeather());
      searchWeatherVM = searchWeather?.searchWeather?.map(
        searchWeatherEntity => new SearchWeatherVM(searchWeatherEntity),
      );
    }
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
