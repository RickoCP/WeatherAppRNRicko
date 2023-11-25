import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
import {Day} from '@core/initialData/initialData';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    textWrapper: {
      flex: 1,
      flexdirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      margin: 2,
      borderRadius: 10,
      backgroundColor: mainTheme(themeInput).background.color,
      borderColor: mainTheme(themeInput).Theme1.color,
    },
  });
}
