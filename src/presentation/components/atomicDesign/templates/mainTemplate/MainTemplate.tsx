import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../constants';
import {styles} from './MainTemplate.style';

const MainTemplate = ({header, children}: any) => {
  return (
    <View style={styles.mainPage}>
      <ImageBackground
        blurRadius={1}
        source={images.backgroundImage}
        // resizeMode="cover"
        resizeMode="contain"
        style={styles.image}>
        {header && <View style={styles.mainHeader}>{header}</View>}
        <View style={styles.mainPokemonList}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default MainTemplate;
