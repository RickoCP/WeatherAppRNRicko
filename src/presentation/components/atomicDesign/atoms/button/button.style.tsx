import {StyleSheet} from 'react-native';
import {SIZES, mainTheme} from '../../constants/theme';
import {TButtonSize, TButtonVariant} from './button.type';
import {Day} from '@core/initialData/initialData';

export function theme(themeInput: string = Day): Record<TButtonVariant, any> {
  return {
    primary1: {
      backgroundColor: mainTheme(themeInput).Theme1.color,
      borderColor: mainTheme(themeInput).Theme4.color,
    },

    primary2: {
      backgroundColor: mainTheme(themeInput).Theme2.color,
      borderColor: mainTheme(themeInput).Theme3.color,
    },
    primary3: {
      backgroundColor: mainTheme(themeInput).Theme3.color,
      borderColor: mainTheme(themeInput).Theme3.color,
    },
    secondary: {
      backgroundColor: mainTheme(themeInput).Theme4.color,
      borderColor: mainTheme(themeInput).Theme3.color,
    },
  };
}

export const buttonSize: Record<TButtonSize, any> = {
  default: {
    paddingHor: SIZES.paddingHorButton,
    paddingVertical: SIZES.paddingVerticalButton,
  },
  small: {
    paddingHor: SIZES.paddingHorButton,
    paddingVertical: SIZES.paddingVerticalButton,
  },
  large: {
    paddingHor: SIZES.paddingHorButton,
    paddingVertical: SIZES.paddingVerticalButton,
  },
};

export const styles = StyleSheet.create({
  buttonPrimer: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.borderRadiusButton,
    marginHorizontal: SIZES.marginHorizontalButton,
    borderWidth: SIZES.borderWidthButton,
    margin: SIZES.marginButton,
    paddingHorizontal: SIZES.paddingHorizontalButton,
  },
});
