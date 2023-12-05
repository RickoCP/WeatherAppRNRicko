import {StyleSheet} from 'react-native';
import {SIZES, mainTheme} from '../../constants/theme';
import {Day} from '@core/initialData/initialData';
import {wp} from '../../constants/ResponsiveLayout';

export function styles(themeInput: string = Day): any {
  return StyleSheet.create({
    textWrapper: {
      width: wp(80),
      flex: 1,
      flexdirection: 'row',
      alignItems: 'center',
      padding: SIZES.padding,
      borderWidth: wp(2),
      margin: wp(2),
      borderRadius: SIZES.radius,
      backgroundColor: mainTheme(themeInput).background.color,
      borderColor: mainTheme(themeInput).Theme1.color,
    },
    iconView: {
      width: wp(35),
      height: wp(35),
    },
  });
}

// className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
