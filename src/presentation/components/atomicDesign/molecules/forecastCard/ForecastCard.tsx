import React, {memo} from 'react';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import {TouchableOpacity, Text} from 'react-native';
import {IForecastdayHour} from '@domains/entities/interfaces/iForecastWeather';
import {ISelectedConditionEntity} from '@domains/entities/interfaces/iSelectedCondition';
import {mainTheme} from '../../constants/theme';
import FastImage from 'react-native-fast-image';
import {styles} from './ForecastCard.style';

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
  console.log('render ForecastCard');
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
      style={{
        ...styles(theme).textWrapper,
        backgroundColor:
          item.forecastday_time === selectedCondition?.selected_time
            ? mainTheme(theme).tabIconSelected.color
            : mainTheme(theme).tabIconDefault.color,
      }}>
      <FastImage
        style={styles().iconView}
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

const equal = (
  prev: {
    item: IForecastdayHour;
    selectedCondition: ISelectedConditionEntity;
  },
  next: {
    item: IForecastdayHour;
    selectedCondition: ISelectedConditionEntity;
  },
) =>
  (prev.item.forecastday_time === prev.selectedCondition?.selected_time) ===
  (next.item.forecastday_time === next.selectedCondition?.selected_time);

export default memo(ForecastCard, equal);
