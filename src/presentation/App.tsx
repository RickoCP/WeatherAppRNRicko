import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from '../../app.json';
import store from './redux/store';
import Index from './components/atomicDesign/Index';
import CodePush from 'react-native-code-push';

export const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => CodePush(App));
