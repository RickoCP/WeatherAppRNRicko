import {StyleSheet} from 'react-native';
import {hp} from '../../constants/ResponsiveLayout';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: COLORS.Theme2,
  },
  mainHeader: {
    height: hp(60),
  },
  mainList: {
    flex: 1,
    borderRadius: 10,
  },
});
