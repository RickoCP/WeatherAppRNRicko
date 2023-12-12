import {StyleSheet} from 'react-native';
import {wp} from '../../constants/ResponsiveLayout';

export const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: wp(20),
    paddingTop: wp(5),
    paddingBottom: wp(5),
  },

  title: {
    width: '70%',
    height: wp(50),
    justifyContent: 'center',
    fontWeight: '700',
  },
  titleText: {
    fontSize: wp(20),
    color: 'black',
  },
  logoutBtn: {
    width: '30%',
    height: wp(50),
    justifyContent: 'center',
  },
});
