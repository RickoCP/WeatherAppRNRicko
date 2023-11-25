import {Day} from '@core/initialData/initialData';
import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    setButtonError: {
      margin: 20,
      height: 50,
    },
    searchWrapper: {
      height: '7%',
    },

    mainIconWrapper: {
      width: 120,
      height: 120,
      backgroundColor: mainTheme(themeInput).background.color,
      padding: 10,
      borderRadius: 60,
    },
    mainIconStyle: {
      padding: 40,
      borderRadius: 60,
    },
    detailWrapper: {
      flex: 1,
      backgroundColor: mainTheme(themeInput).tabIconSelected.color,
      borderRadius: 20,
      alignItems: 'center',
    },
    detailStatus: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 20,
    },
  });
}
