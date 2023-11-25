import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants';
import {styles} from './Loader.style';

const Loader = ({title = 'Fetching Weather'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.YELLOW_COLOR} />
      <Text style={styles.loaderText}>{title}</Text>
    </View>
  );
};

export default Loader;
