import React from 'react';
import {Text} from 'react-native';
import {styles} from '../WeatherDetail.style';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import {ButtonComponent} from '@presentation/components/atomicDesign/atoms/button/buttonComponent';
import {IDetailWeather} from '@presentation/presenters/action-interfaces/iDetailWeather';

interface IWeatherDetailError {
  theme: string;
  weatherDetail: IDetailWeather;
  asyncWeatherDetail: () => Promise<void>;
}

function WeatherDetailError({
  weatherDetail,
  asyncWeatherDetail,
}: IWeatherDetailError) {
  console.log('render WeatherDetailError');

  return (
    <>
      <TextComponent
        style={styles.title}
        text={`error: ${weatherDetail?.error?.message}`}
      />
      <Text style={styles.title}>error: {weatherDetail?.error?.message}</Text>
      <ButtonComponent
        onClick={asyncWeatherDetail}
        variant={'primary3'}
        size={'default'}
        style={styles.setButtonError}>
        <TextComponent text={'refresh'} variant="primary1" size="h3" />
      </ButtonComponent>
    </>
  );
}

export default WeatherDetailError;
