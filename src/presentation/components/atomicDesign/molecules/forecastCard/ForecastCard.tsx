import React, {memo} from 'react';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import {TouchableOpacity, Text} from 'react-native';
import {IForecastdayHour} from '@domains/entities/interfaces/iForecastWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {mainTheme} from '../../constants/theme';
import FastImage from 'react-native-fast-image';

interface IForecastCard {
  selectedCondition: ISelectedConditionEntity;
  theme: string;
  item: IForecastdayHour;
  onSelectCondition: (conditionSelected: ISelectedConditionEntity) => void;
}

function ForecastCard({
  selectedCondition,
  theme,
  item,
  onSelectCondition,
}: Readonly<IForecastCard>) {
  return (
    <TouchableOpacity
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
      <FastImage
        className="w-11 h-11"
        source={{uri: 'https:' + item?.forecastday_icon}}
      />
      <Text className="text-base font-semibold" style={mainTheme(theme).text}>
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
}

export default memo(ForecastCard);
