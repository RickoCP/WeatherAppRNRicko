import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
import {Day} from '@core/initialData/initialData';
import {wp} from '../../constants/ResponsiveLayout';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    searchWrapper: {
      height: '7%',
    },
    hideSearchWrapper: {
      backgroundColor: 'transparent',
      padding: wp(5),
      margin: wp(5),
    },
    showSearchWrapper: {
      backgroundColor: mainTheme(themeInput).Theme4.color,
      padding: wp(5),
      margin: wp(5),
    },
    iconSearchWrapper: {
      backgroundColor: mainTheme(themeInput).Theme1.color,
      padding: wp(5),
    },
    text: {
      display: 'flex',
      flex: 1,
      color: mainTheme(themeInput).text.color,
      paddingLeft: wp(15),
      padding: wp(3),
      height: wp(30),
    },
  });
}
