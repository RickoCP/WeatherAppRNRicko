import React from 'react';
import {View, SafeAreaView} from 'react-native';

import {styles} from './MainTemplate.style';

const MainTemplate = ({header, children}: any) => {
  return (
    <SafeAreaView style={styles.mainPage}>
      {header && <View style={styles.mainHeader}>{header}</View>}
      <View style={styles.mainList}>{children}</View>
    </SafeAreaView>
  );
};

export default MainTemplate;
