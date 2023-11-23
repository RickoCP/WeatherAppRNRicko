import IInfrastructures from './interfaces/iInfrastructures';
import Http from '@data/infrastructures/Http';
import HttpPinning from '@data/infrastructures/HttpPinning';
import * as Keychain from 'react-native-keychain';
import KeyChainStorage from '@data/infrastructures/KeyChainStorage';

export default (): IInfrastructures => {
  return {
    httpPinning: new HttpPinning(),
    http: new Http(),
    // storage: new MobileStorage(AsyncStorage),
    storage: new KeyChainStorage(Keychain),
  };
};
