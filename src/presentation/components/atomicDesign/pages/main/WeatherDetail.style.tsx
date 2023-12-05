import {StyleSheet} from 'react-native';
import {SIZES, mainTheme} from '../../constants/theme';
import {hp} from '../../constants/ResponsiveLayout';
import {Day} from '@core/initialData/initialData';
import {wp} from '../../constants/ResponsiveLayout';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    imageBackground: {
      height: SIZES.height - hp(60),
      paddingTop: hp(10),
      rowGap: hp(20),
      borderTopLeftRadius: wp(20),
      borderTopRightRadius: wp(20),
      padding: wp(10),
    },
    imageStyle: {
      borderTopLeftRadius: wp(20),
      borderTopRightRadius: wp(20),
    },
    background: {
      flex: 1,
      borderTopLeftRadius: wp(20),
      borderTopRightRadius: wp(20),
      backgroundColor: mainTheme(themeInput).background.color,
    },
  });
}
