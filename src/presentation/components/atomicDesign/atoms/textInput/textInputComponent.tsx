import React from 'react';
import {TextInput} from 'react-native';
import {styles, textSize, theme} from './textInput.style';
import {ITextInputProps} from './textInput.type';
import {Day} from '@core/initialData/initialData';

export function TextInputComponent({
  className = '',
  themeInput = Day,
  variant = 'primary1',
  size = 'h1',
  onChangeText,
  value = '',
  placeholder = '',
  style = {},
  ...props
}: Readonly<ITextInputProps>) {
  return (
    <TextInput
      style={[
        styles.inputView,
        theme(themeInput)[variant],
        textSize[size],
        style,
      ]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
}
