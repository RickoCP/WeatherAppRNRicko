import React from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../atoms/text/textComponent';
import {TextInputComponent} from '../../atoms/textInput/textInputComponent';
import {styles} from './Field.style';

const Field = ({label, ...inputProps}: any) => {
  return (
    <View style={styles.fieldStyle}>
      <TextComponent text={label} size={'body3'} />
      <TextInputComponent placeholder={label} {...inputProps} />
    </View>
  );
};

export default Field;
