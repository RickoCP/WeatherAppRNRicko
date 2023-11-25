import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import {useWeatherDetail} from './WeatherDetail.hook';
import WeatherDetailError from '../../organisms/mainComponent/WeatherDetailError';
import MainTemplate from '../../templates/mainTemplate/MainTemplate';
import Header from '../../organisms/header/Header';
import SearchSection from '../../organisms/mainComponent/SearchSection';
import ForecastSection from '../../organisms/mainComponent/ForecastSection';
import ForecastNextDay from '../../organisms/mainComponent/ForecastNextDay';
import {images} from '../../constants';
import {styles} from './WeatherDetail.style';
import {Night} from '@core/initialData/initialData';

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
    showSearch,
    refreshing,
    onRefresh,
    toggleSearch,
  } = useWeatherDetail();
  console.log('render WeatherDetil page');
  return (
    <MainTemplate header={<Header theme={theme} />}>
      {detailWeather.isLoading && <ActivityIndicator size="large" />}

      {!detailWeather.isLoading && detailWeather.error && (
        <WeatherDetailError
          theme={theme}
          weatherDetail={detailWeather}
          asyncWeatherDetail={asyncDetailWeather}
        />
      )}

      {!detailWeather.isLoading && !detailWeather.error && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles(theme).background}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }>
          <ImageBackground
            blurRadius={10}
            source={
              theme === Night
                ? images.nightbackgroundImage
                : images.daybackgroundImage
            }
            style={styles(theme).imageBackground}
            imageStyle={styles(theme).imageStyle}
            resizeMode="cover">
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
          </ImageBackground>
        </ScrollView>
      )}
    </MainTemplate>
  );
};

export default WeatherDetail;
