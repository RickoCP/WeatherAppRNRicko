import React, {memo} from 'react';
import {styles} from './DetaileForecastCard.style';
import LottieView from 'lottie-react-native';
import {wp} from '../../constants/ResponsiveLayout';
import {View} from 'react-native';
import {TextComponent} from '../../atoms/text/textComponent';

interface IDetailForecastCard {
  detail: string | number;
  icon: string;
  text: string;
  theme: string;
}

function DetailForecastCard({
  detail,
  icon,
  text,
  theme,
}: Readonly<IDetailForecastCard>) {
  return (
    <View style={styles().cardWrapper}>
      <LottieView
        autoPlay
        source={icon}
        style={{
          height: wp(40),
          width: wp(40),
        }}
      />

      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'body4'}
        text={detail}
      />
      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'body4'}
        text={text}
      />
    </View>
  );
}

export default memo(DetailForecastCard);
