import {StyleSheet} from 'react-native';
import {FONTS, mainTheme} from '../../constants/theme';
import {TTextSize, TTextVariant} from './text.type';

export function theme(themeInput: string): Record<TTextVariant, any> {
  return {
    primary1: mainTheme(themeInput).text,
    primary2: mainTheme(themeInput).tint,
    primary3: mainTheme(themeInput).background,
    secondary: mainTheme(themeInput).tabIconDefault,
  };
}

export const textSize: Record<TTextSize, any> = {
  largeTitle: FONTS.largeTitle,
  h1: FONTS.h1,
  h2: FONTS.h2,
  h3: FONTS.h3,
  h4: FONTS.h4,
  h5: FONTS.h5,
  body1: FONTS.body1,
  body2: FONTS.body2,
  body3: FONTS.body3,
  body4: FONTS.body4,
  body5: FONTS.body5,
};

export const styles = StyleSheet.create({
  textPrimer: {},
});
