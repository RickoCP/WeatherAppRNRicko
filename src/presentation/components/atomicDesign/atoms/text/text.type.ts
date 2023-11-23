import {ReactNode} from 'react';

export type TTextVariant = 'primary1' | 'primary2' | 'primary3' | 'secondary';

export type TTextSize =
  | 'largeTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5';

export interface ITextProps {
  className?: string;
  themeInput?: string;
  variant?: TTextVariant;
  size?: TTextSize;
  text?: ReactNode;
  style?: any;
  onPress?: () => void;
}
