import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Day} from '@core/initialData/initialData';

export const COLORS = {
  primary1_1: '#1A120B',
  primary1_2: '#3C2A21',
  primary1_3: '#D5CEA3',
  secondary1: '#E5E5CB',

  primary2_1: '#1A120B',
  primary2_2: '#3C2A21',
  primary2_3: '#D5CEA3',
  secondary2: '#E5E5CB',

  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',

  tintColorLight: '#0005',
  tintColorDark: '#0005',

  SelectedTintColorLight: '#0009',
  SelectedTintColorDark: '#0009',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

export const theme1 = {
  name: 'theme_1',
  backgroundColor1: COLORS.primary1_1,
  backgroundColor2: COLORS.primary1_2,
  backgroundColor3: COLORS.primary1_3,
  borderColor1: COLORS.secondary1,
  textColor: COLORS.black,
  textColor2: COLORS.white,
  bgWhite: (opacity: any) => `rgba(0,0,0, ${opacity})`,

  text: '#000',
  background: '#fff',
  tint: COLORS.tintColorLight,
  tabIconDefault: COLORS.tintColorLight,
  tabIconSelected: COLORS.SelectedTintColorLight,
};

export const theme2 = {
  name: 'theme2',
  backgroundColor1: COLORS.primary2_1,
  backgroundColor2: COLORS.primary2_2,
  backgroundColor3: COLORS.primary2_3,
  borderColor1: COLORS.secondary2,
  textColor: COLORS.black,
  textColor2: COLORS.white,
  bgWhite: (opacity: any) => `rgba(255,255,255, ${opacity})`,

  text: '#fff',
  background: '#000',
  tint: COLORS.tintColorDark,
  tabIconDefault: COLORS.tintColorDark,
  tabIconSelected: COLORS.SelectedTintColorDark,
};

export function mainTheme(theme: string): any {
  return StyleSheet.create({
    backgroundColor1: {
      color: theme === Day ? theme1.backgroundColor1 : theme2.backgroundColor1,
    },
    backgroundColor2: {
      color: theme === Day ? theme1.backgroundColor2 : theme2.backgroundColor2,
    },
    backgroundColor3: {
      color: theme === Day ? theme1.backgroundColor3 : theme2.backgroundColor3,
    },
    borderColor1: {
      color: theme === Day ? theme1.borderColor1 : theme2.borderColor1,
    },
    textColor: {
      color: theme === Day ? theme1.textColor : theme2.textColor,
    },
    textColor2: {
      color: theme === Day ? theme1.textColor2 : theme2.textColor2,
    },
    text: {
      color: theme === Day ? theme1.text : theme2.text,
    },
    background: {
      color: theme === Day ? theme1.background : theme2.background,
    },
    tint: {
      color: theme === Day ? theme1.tint : theme2.tint,
    },
    tabIconDefault: {
      color: theme === Day ? theme1.tabIconDefault : theme2.tabIconDefault,
    },
    tabIconSelected: {
      color: theme === Day ? theme1.tabIconSelected : theme2.tabIconSelected,
    },
  });
}

const appTheme = {COLORS, SIZES, FONTS, theme1, theme2};

export default appTheme;
