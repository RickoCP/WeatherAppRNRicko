import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './index.style';
import useIndex from './index.hook';
// import JailMonkey from 'jail-monkey';
import Login from './pages/login/Login';
import ModalComp from './molecules/modalComp/ModalComp';
import WeatherDetail from './pages/main/WeatherDetail';

const Index: React.FC = () => {
  const {token} = useIndex();

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View style={styles.baseView}>
          {/* <ModalComp isShow={JailMonkey.isJailBroken()} /> */}
          <ModalComp isShow={false} />
          {token === '' && <Login />}
          {token !== '' && <WeatherDetail />}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
