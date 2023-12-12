import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
import {Day} from '@core/initialData/initialData';
import {wp} from '../../constants/ResponsiveLayout';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    setButtonError: {
      margin: wp(20),
      height: wp(50),
    },
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
    itemWrapper: {
      padding: wp(10),
      marginBottom: wp(2),
    },
  });
}
