import {StyleSheet} from 'react-native';
import {SIZES, mainTheme} from '../../constants/theme';
import {hp} from '../../constants/ResponsiveLayout';
import {Day} from '@core/initialData/initialData';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    imageBackground: {
      height: SIZES.height - hp(60),
      paddingTop: hp(10),
      rowGap: hp(20),
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    imageStyle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    background: {
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: mainTheme(themeInput).background.color,
    },
  });
}
