import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {IDetailWeatherVM} from '@presentation/vm/DetailWeather';
import {weatherImages} from '@presentation/components/atomicDesign/constants/image';
import {mainTheme} from '@presentation/components/atomicDesign/constants/theme';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import FastImage from 'react-native-fast-image';

interface IForecastSection {
  location: IDetailWeatherVM;
  theme: string;
}

function ForecastSection({theme, location}: IForecastSection) {
  const {forecastWeather} = location;
  console.log('render ForecastSection');

  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* location */}
      <View
        className="text-center text-2xl font-bold"
        style={[mainTheme(theme).text]}>
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'largeTitle'}
          text={forecastWeather?.name}
        />
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'h3'}
          text={forecastWeather?.localtime}
        />
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'h3'}
          text={theme}
        />
      </View>

      {/* weather icon */}
      <View className="flex-row justify-center">
        <FastImage
          style={{width: 120, height: 120}}
          source={
            weatherImages[
              (forecastWeather?.condition_text ||
                'other') as keyof typeof weatherImages
            ]
          }
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      {/* degree celcius */}
      <View className="space-y-2 text-center flex-col">
        <Text
          className="text-center font-bold text-4xl ml-5 font-black"
          style={mainTheme(theme).text}>
          {forecastWeather?.temp_c + ' '}&#176;
        </Text>
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'body1'}
          text={forecastWeather?.condition_text}
          className={'space-y-2 text-center flex-col'}
        />
      </View>

      {/* other stats */}
      <View className="flex-row justify-between">
        <View className="flex-col space-x-1 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body2'}
            text={'sunrise'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body3'}
            text={forecastWeather?.sunrise}
          />
        </View>
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body2'}
            text={'sunset'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body3'}
            text={forecastWeather?.sunset}
          />
        </View>
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body2'}
            text={'moonrise'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body3'}
            text={forecastWeather?.moonrise}
          />
        </View>
        <View className="flex-col space-x-2 items-center">
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body2'}
            text={'moonset'}
          />
          <TextComponent
            themeInput={theme}
            variant={'primary1'}
            size={'body3'}
            text={forecastWeather?.moonset}
          />
        </View>
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
