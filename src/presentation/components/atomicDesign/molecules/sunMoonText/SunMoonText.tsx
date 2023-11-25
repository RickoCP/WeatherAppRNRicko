import React, {memo} from 'react';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import {View} from 'react-native';
import {styles} from './SunMoonText.style';

interface ISunMoonText {
  theme: string;
  title: string;
  time: string;
}

function SunMoonText({theme, title, time}: Readonly<ISunMoonText>) {
  return (
    <View style={styles().textWrapper}>
      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'h3'}
        text={title}
      />
      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'h4'}
        text={time}
      />
    </View>
  );
}

export default memo(SunMoonText);
