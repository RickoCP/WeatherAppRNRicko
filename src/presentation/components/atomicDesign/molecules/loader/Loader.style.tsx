import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {hp, wp} from '../../constants/ResponsiveLayout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    ...StyleSheet.absoluteFillObject,
  },
  loaderText: {
    fontSize: wp(22),
    fontFamily: 'Roboto-Bold',
    color: COLORS.WHITE,
    marginTop: hp(16),
  },
});
