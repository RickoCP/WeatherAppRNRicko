import {StyleSheet} from 'react-native';
import {wp} from '../../constants/ResponsiveLayout';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  loginForm: {
    padding: wp(60),
    backgroundColor: COLORS.whiteTrans,
    margin: wp(20),
    borderRadius: wp(20),
    gap: wp(10),
  },
  image: {
    padding: wp(20),
    width: '100%',
    height: wp(200),
    backgroundColor: COLORS.whiteTrans,
    resizeMode: 'contain',
  },
  inputView: {
    paddingLeft: wp(10),
    paddingRight: wp(10),
    height: wp(50),
    borderColor: COLORS.border,
    borderWidth: 1,
    color: COLORS.black,
    marginBottom: wp(10),
  },
  loginView: {
    height: wp(50),
  },
});
