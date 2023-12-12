import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
import {Day} from '@core/initialData/initialData';
import {wp} from '../../constants/ResponsiveLayout';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    textWrapper: {
      flex: 1,
      flexdirection: 'row',
      alignItems: 'center',
      borderWidth: wp(2),
      margin: wp(2),
      borderRadius: wp(10),
      backgroundColor: mainTheme(themeInput).background.color,
      borderColor: mainTheme(themeInput).Theme1.color,
    },
  });
}
