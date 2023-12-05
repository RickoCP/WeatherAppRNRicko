import React from 'react';
import {View, ScrollView} from 'react-native';
import {IDetailWeatherVM} from '@presentation/vm/DetailWeather';
import Icon from 'react-native-vector-icons/AntDesign';
import {mainTheme} from '@presentation/components/atomicDesign/constants/theme';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {convertToSingleArray} from '@core/lib/convertToSingleArray';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import DetailForecastCard from '../../molecules/detailForecastCard/DetailForecastCard';
import ForecastCard from '../../molecules/forecastCard/ForecastCard';
import {styles} from './MainComponent.style';
import {images} from '../../constants';

interface IForecastNextDay {
  theme: string;
  location: IDetailWeatherVM;
  onSelectCondition: (conditionSelected: ISelectedConditionEntity) => void;
}

function ForecastNextDay({
  theme,
  location,
  onSelectCondition,
}: Readonly<IForecastNextDay>) {
  const {forecastWeather, selectedCondition} = location;
  console.log('render ForecastNextDay Section');

  return (
    <View
      className="flex justify-around"
      style={styles().forecastNextDayWrapper}>
      {/* forecast for next days */}
      <View className="mb-2 space-y-3">
        <View className="flex-row items-center space-x-2">
          <Icon name="calendar" size={22} color={mainTheme(theme).text.color} />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h2'}
            text={'Today forecast'}
          />
        </View>
        <ScrollView
          horizontal
          className={'px-0'}
          showsHorizontalScrollIndicator={false}>
          {convertToSingleArray(
            forecastWeather?.forecastday_hour,
            forecastWeather.localtime,
          ).map(item => {
            return (
              <ForecastCard
                key={item.forecastday_time}
                selectedCondition={selectedCondition}
                theme={theme}
                item={item}
                onSelectCondition={onSelectCondition}
              />
            );
          })}
        </ScrollView>
      </View>
      {/* selected */}
      <View style={styles(theme).detailWrapper}>
        <View className="flex-row space-x-2 items-center p-2">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h3'}
            text={'Condition at '}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h3'}
            text={selectedCondition?.selected_time}
          />
        </View>
        <View
          // className="flex-row justify-between"
          style={styles(theme).detailStatus}>
          <DetailForecastCard
            detail={selectedCondition?.selected_wind_dir}
            icon={images.windIcon}
            text={'Wind'}
            theme={theme}
          />
          <DetailForecastCard
            detail={selectedCondition?.selected_humidity}
            icon={images.humidityIcon}
            text={'Humidity'}
            theme={theme}
          />
          <DetailForecastCard
            detail={selectedCondition?.selected_uv}
            icon={images.uvIcon}
            text={'UV'}
            theme={theme}
          />
        </View>
      </View>
    </View>
  );
}

export default ForecastNextDay;
