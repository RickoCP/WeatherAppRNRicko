import {StyleSheet} from 'react-native';
import {mainTheme} from '../../constants/theme';
import {TButtonSize, TButtonVariant} from './button.type';

export function theme(themeInput: string): Record<TButtonVariant, any> {
  return {
    primary1: {
      backgroundColor: mainTheme(themeInput).backgroundColor1.color,
      borderColor: mainTheme(themeInput).backgroundColor1.color,
    },

    primary2: {
      backgroundColor: mainTheme(themeInput).backgroundColor2.color,
      borderColor: mainTheme(themeInput).backgroundColor1.color,
    },
    primary3: {
      backgroundColor: mainTheme(themeInput).backgroundColor3.color,
      borderColor: mainTheme(themeInput).backgroundColor1.color,
    },
    secondary: {
      backgroundColor: mainTheme(themeInput).borderColor1.color,
      borderColor: mainTheme(themeInput).backgroundColor1.color,
    },
  };
}

export const buttonSize: Record<TButtonSize, any> = {
  default: {paddingHor: 4, paddingVertical: 2},
  small: {paddingHor: 4, paddingVertical: 2},
  large: {paddingHor: 4, paddingVertical: 2},
};

export const styles = StyleSheet.create({
  buttonPrimer: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    borderWidth: 3,
    margin: 4,
    paddingHorizontal: 10,
  },
});
