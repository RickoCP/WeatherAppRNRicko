import {Day} from '@core/initialData/initialData';
import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
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
    mainIconWrapper: {
      width: wp(120),
      height: wp(120),
      backgroundColor: mainTheme(themeInput).background.color,
      padding: wp(10),
      borderRadius: wp(60),
    },
    mainIconStyle: {
      padding: wp(40),
      borderRadius: wp(60),
    },
    detailWrapper: {
      flex: 1,
      backgroundColor: mainTheme(themeInput).tabIconSelected.color,
      borderRadius: wp(20),
      alignItems: 'center',
    },
    detailStatus: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: wp(20),
    },
    forecastNextDayWrapper: {
      height: wp(300),
    },
  });
}
