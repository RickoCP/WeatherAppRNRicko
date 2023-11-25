import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../constants';
import {styles} from './AuthTemplate.style';

const AuthTemplate = ({children}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default AuthTemplate;
