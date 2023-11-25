import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {IDetailWeatherVM} from '@presentation/vm/DetailWeather';
import {weatherImages} from '@presentation/components/atomicDesign/constants/image';
import {mainTheme} from '@presentation/components/atomicDesign/constants/theme';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import FastImage from 'react-native-fast-image';
import {styles} from './MainComponent.style';
import SunMoonText from '../../molecules/sunMoonText/SunMoonText';

interface IForecastSection {
  location: IDetailWeatherVM;
  theme: string;
}

function ForecastSection({theme, location}: Readonly<IForecastSection>) {
  const {forecastWeather} = location;
  console.log('render ForecastSection');

  return (
    <View className="mx-4 flex justify-between flex-1 mb-2">
      <View className="flex flex-row justify-between p-4">
        {/* location */}
        <View className="flex gap-4">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h3'}
            text={forecastWeather?.localtime}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'h1'}
            text={forecastWeather?.name}
          />

          <Text className="font-bold text-4xl" style={mainTheme(theme).text}>
            {forecastWeather?.temp_c + ' '}&#176;
          </Text>
        </View>

        {/* weather icon */}
        <View className="flex justify-center gap-2">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body3'}
            text={forecastWeather?.condition_text}
            className={'space-y-2 text-center flex-col'}
          />
          <View style={styles(theme).mainIconWrapper}>
            <FastImage
              style={styles(theme).mainIconStyle}
              source={
                weatherImages[
                  (forecastWeather?.condition_text ||
                    'other') as keyof typeof weatherImages
                ]
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
      </View>

      {/* other stats */}
      <View className="flex-row justify-between">
        <SunMoonText
          theme={theme}
          title={'sunrise'}
          time={forecastWeather?.sunrise}
        />
        <SunMoonText
          theme={theme}
          title={'sunset'}
          time={forecastWeather?.sunset}
        />
        <SunMoonText
          theme={theme}
          title={'moonrise'}
          time={forecastWeather?.moonrise}
        />
        <SunMoonText
          theme={theme}
          title={'moonset'}
          time={forecastWeather?.moonset}
        />
      </View>
    </View>
  );
}

const equal = (
  prev: {
    location: IDetailWeatherVM;
    theme: string;
  },
  next: {
    location: IDetailWeatherVM;
    theme: string;
  },
) =>
  prev.location.forecastWeather === next.location.forecastWeather &&
  prev.theme === next.theme;

export default memo(ForecastSection, equal);
