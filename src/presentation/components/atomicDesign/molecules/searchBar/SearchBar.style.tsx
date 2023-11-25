import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
import {Day} from '@core/initialData/initialData';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    searchWrapper: {
      height: '7%',
    },
    hideSearchWrapper: {
      backgroundColor: 'transparent',
    },
    showSearchWrapper: {
      backgroundColor: mainTheme(themeInput).Theme4.color,
    },
    iconSearchWrapper: {
      backgroundColor: mainTheme(themeInput).Theme1.color,
    },
    text: mainTheme(themeInput).text,
  });
}
