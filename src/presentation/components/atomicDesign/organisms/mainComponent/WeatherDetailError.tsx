import React from 'react';
import {View} from 'react-native';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import {ButtonComponent} from '@presentation/components/atomicDesign/atoms/button/buttonComponent';
import {IDetailWeather} from '@presentation/presenters/action-interfaces/iDetailWeather';
import {styles} from './MainComponent.style';

interface IWeatherDetailError {
  theme: string;
  weatherDetail: IDetailWeather;
  asyncWeatherDetail: () => Promise<void>;
}

function WeatherDetailError({
  theme,
  weatherDetail,
  asyncWeatherDetail,
}: Readonly<IWeatherDetailError>) {
  console.log('render WeatherDetailError');

  return (
    <View className="p-4 align-center">
      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'largeTitle'}
        text={`error: ${weatherDetail?.error?.message}`}
      />
      <ButtonComponent
        themeInput={theme}
        onClick={asyncWeatherDetail}
        variant={'primary3'}
        size={'default'}
        style={styles().setButtonError}>
        <TextComponent text={'refresh'} variant="primary1" size="h3" />
      </ButtonComponent>
    </View>
  );
}

export default WeatherDetailError;
