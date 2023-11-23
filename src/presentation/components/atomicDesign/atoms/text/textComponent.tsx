import React from 'react';
import {Text, View} from 'react-native';
import {styles, textSize, theme} from './text.style';
import {ITextProps} from './text.type';
import {Day} from '@core/initialData/initialData';

export function TextComponent({
  className = '',
  themeInput = Day,
  variant = 'primary1',
  size = 'largeTitle',
  text,
  style = {},
  onPress,
  ...props
}: ITextProps) {
  return (
    <View>
      <Text
        onPress={onPress}
        style={[
          styles.textPrimer,
          theme(themeInput)[variant],
          textSize[size],
          style,
        ]}
        className={className}
        {...props}>
        {text}
      </Text>
    </View>
  );
}
