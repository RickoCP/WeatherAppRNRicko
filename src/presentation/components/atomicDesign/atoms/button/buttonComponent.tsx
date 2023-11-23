import React from 'react';
import {Pressable, View} from 'react-native';
import {buttonSize, styles, theme} from './button.style';
import {IButtonProps} from './button.type';
import {Day} from '@core/initialData/initialData';

export function ButtonComponent({
  className = '',
  themeInput = Day,
  variant = 'primary1',
  size = 'large',
  disabled = false,
  children,
  onClick,
  style = {},
  ...props
}: IButtonProps) {
  const onClickButton = () => {
    onClick();
  };

  return (
    <View style={style} className={className}>
      <Pressable
        style={pressed => [
          styles.buttonPrimer,
          pressed && theme(themeInput)[variant],
          ,
          buttonSize[size],
        ]}
        disabled={disabled}
        onPress={onClickButton}
        {...props}>
        {children}
      </Pressable>
    </View>
  );
}
