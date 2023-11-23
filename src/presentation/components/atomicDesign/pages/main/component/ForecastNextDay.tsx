import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {IDetailWeatherVM} from '@presentation/vm/DetailWeather';
import Icon from 'react-native-vector-icons/AntDesign';
import {mainTheme} from '@presentation/components/atomicDesign/constants/theme';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {convertToSingleArray} from '@core/lib/convertToSingleArray';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';

interface IForecastNextDay {
  theme: string;
  location: IDetailWeatherVM;
  onSelectCondition: (conditionSelected: ISelectedConditionEntity) => void;
}

function ForecastNextDay({
  theme,
  location,
  onSelectCondition,
}: IForecastNextDay) {
  const {forecastWeather, selectedCondition} = location;
  console.log('render ForecastNextDay Section');

  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* forecast for next days */}
      <View className="mb-2 space-y-3">
        <View className="flex-row items-center mx-5 space-x-2">
          <Icon name="calendar" size={22} color={mainTheme(theme).text.color} />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h2'}
            text={'Daily forecast'}
          />
          {/* <Text className="text-white text-base">Daily forecast</Text> */}
        </View>
        <ScrollView
          horizontal
          className={'px-0'}
          showsHorizontalScrollIndicator={false}>
          {convertToSingleArray(
            forecastWeather?.forecastday_hour,
            forecastWeather.localtime,
          ).map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  onSelectCondition({
                    selected_time: item.forecastday_time,
                    selected_temp_c: item.forecastday_temp_c,
                    selected_wind_dir: item.forecastday_wind_dir,
                    selected_humidity: item.forecastday_humidity,
                    selected_uv: item.forecastday_uv,
                  })
                }
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{
                  backgroundColor:
                    item.forecastday_time === selectedCondition?.selected_time
                      ? mainTheme(theme).tabIconSelected.color
                      : mainTheme(theme).tabIconDefault.color,
                }}>
                <Image
                  source={{uri: 'https:' + item?.forecastday_icon}}
                  className="w-11 h-11"
                />
                <Text
                  className="text-base font-semibold"
                  style={mainTheme(theme).text}>
                  {item?.forecastday_temp_c}&#176;
                </Text>
                <TextComponent
                  themeInput={theme}
                  variant={'primary1'}
                  size={'body4'}
                  text={item?.forecastday_time.split(' ')[1]}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* selected */}
      <View className="flex-row space-x-2 items-center">
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'h4'}
          text={'date'}
        />
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'h4'}
          text={selectedCondition?.selected_time}
        />
      </View>
      <View className="flex-row justify-between mx-4">
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={'Temp'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={selectedCondition?.selected_temp_c}
          />
        </View>
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={'Wind Dir'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={selectedCondition?.selected_wind_dir}
          />
        </View>
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={'Humidity'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={selectedCondition?.selected_humidity}
          />
        </View>
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={'UV'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h4'}
            text={selectedCondition?.selected_uv}
          />
        </View>
      </View>
    </View>
  );
}

export default ForecastNextDay;
