import {StyleSheet} from 'react-native';
import {Day} from '@core/initialData/initialData';
import {DEVICE_HEIGHT, DEVICE_WIDTH, wp} from './ResponsiveLayout';

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
  border: '#bbbbbb',

  whiteTrans: '#FFFFFFc0',
  blackTrans: '#000000c0',

  transparent: 'transparent',

  tintColorLight: '#0005',
  tintColorDark: '#0005',

  SelectedTintColorLight: '#0009',
  SelectedTintColorDark: '#0009',

  Theme1: '#6B240C77',
  Theme2: '#994D1C77',
  Theme3: '#E48F4577',
  Theme4: '#F5CCA077',

  WHITE: '#fff',
  BLACK: '#000',
  YELLOW_COLOR: '#FFE142',
  ALERT: '#ED4F32',
};

export const SIZES = {
  // global sizes
  base: wp(8),
  font: wp(14),
  radius: wp(10),
  padding: wp(10),
  margin: wp(10),

  // font sizes
  largeTitle: wp(40),
  h1: wp(30),
  h2: wp(22),
  h3: wp(16),
  h4: wp(14),
  h5: wp(12),
  body1: wp(30),
  body2: wp(22),
  body3: wp(16),
  body4: wp(14),
  body5: wp(12),

  // app dimensions
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT,

  // button
  borderRadiusButton: wp(20),
  marginHorizontalButton: wp(10),
  borderWidthButton: wp(3),
  paddingButton: wp(10),
  marginButton: wp(4),
  paddingHorizontalButton: wp(10),
  paddingHorButton: wp(4),
  paddingVerticalButton: wp(2),

  //text input
  paddingTextInput: wp(10),
  heightTextInput: wp(50),
  borderWidthTextInput: wp(3),
  marginTextInput: wp(10),
  borderRadiusTextInput: wp(15),
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
  background: '#ffffff99',
  tint: COLORS.tintColorLight,

  tabIconDefault: COLORS.Theme4,
  tabIconSelected: COLORS.Theme2,

  Theme1: COLORS.Theme1,
  Theme2: COLORS.Theme2,
  Theme3: COLORS.Theme3,
  Theme4: COLORS.Theme4,
};

export const theme2 = {
  name: 'theme2',
  backgroundColor1: COLORS.primary2_1,
  backgroundColor2: COLORS.primary2_2,
  backgroundColor3: COLORS.primary2_3,
  borderColor1: COLORS.secondary2,
  textColor: COLORS.white,
  textColor2: COLORS.black,
  bgWhite: (opacity: any) => `rgba(255,255,255, ${opacity})`,

  text: '#fff',
  background: '#00000099',
  tint: COLORS.tintColorDark,
  tabIconDefault: COLORS.Theme3,
  tabIconSelected: COLORS.Theme1,

  Theme1: COLORS.Theme1,
  Theme2: COLORS.Theme2,
  Theme3: COLORS.Theme3,
  Theme4: COLORS.Theme4,
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
    Theme1: {
      color: theme === Day ? theme1.Theme1 : theme2.Theme1,
    },
    Theme2: {
      color: theme === Day ? theme1.Theme2 : theme2.Theme2,
    },
    Theme3: {
      color: theme === Day ? theme1.Theme3 : theme2.Theme3,
    },
    Theme4: {
      color: theme === Day ? theme1.Theme4 : theme2.Theme4,
    },
  });
}

const appTheme = {COLORS, SIZES, FONTS, theme1, theme2};

export default appTheme;
