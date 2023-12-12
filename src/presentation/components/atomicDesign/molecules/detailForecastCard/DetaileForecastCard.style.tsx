import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import {wp} from '../../constants/ResponsiveLayout';

export function styles(): any {
  return StyleSheet.create({
    infoMainText: {
      fontSize: wp(16),
      fontFamily: 'Roboto-Bold',
      color: COLORS.BLACK,
    },
    infoText: {
      fontSize: wp(14),
      fontFamily: 'Roboto-Regular',
      color: COLORS.BLACK,
    },
    cardWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(100),
    },
    imageView: {
      height: wp(40),
      width: wp(40),
    },
  });
}
