import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useWeatherDetail} from './WeatherDetail.hook';
import WeatherDetailError from './component/WeatherDetailError';
import MainTemplate from '../../templates/mainTemplate/MainTemplate';
import Header from '../../organisms/header/Header';
import SearchSection from './component/SearchSection';
import ForecastSection from './component/ForecastSection';
import ForecastNextDay from './component/ForecastNextDay';

const WeatherDetail: React.FC = () => {
  const {
    theme,
    asyncDetailWeather,
    detailWeather,
    detailWeatherVM,
    searchWeatherVM,
    onSelectCondition,
    onSelectTerritory,
    handleTextDebounce,
    toggleSearch,
    showSearch,
  } = useWeatherDetail();
  console.log('render WeatherDetil page');
  return (
    <MainTemplate header={<Header />}>
      {detailWeather.isLoading && <ActivityIndicator size="large" />}

      {!detailWeather.isLoading && detailWeather.error && (
        <WeatherDetailError
          theme={theme}
          weatherDetail={detailWeather}
          asyncWeatherDetail={asyncDetailWeather}
          // removePokemon={removePokemon}
        />
      )}

      {!detailWeather.isLoading && !detailWeather.error && (
        <>
          <SearchSection
            theme={theme}
            showSearch={showSearch}
            toggleSearch={toggleSearch}
            handleTextDebounce={handleTextDebounce}
            locations={searchWeatherVM}
            handleLocation={onSelectTerritory}
          />

          <ForecastSection theme={theme} location={detailWeatherVM} />

          <ForecastNextDay
            theme={theme}
            location={detailWeatherVM}
            onSelectCondition={onSelectCondition}
          />
        </>
      )}
    </MainTemplate>
  );
};

export default WeatherDetail;
