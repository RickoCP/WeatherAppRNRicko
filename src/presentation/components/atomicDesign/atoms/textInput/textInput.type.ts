import {ReactNode} from 'react';

export type TTextInputVariant =
  | 'primary1'
  | 'primary2'
  | 'primary3'
  | 'secondary';

export type TTextInputSize =
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

export interface ITextInputProps {
  className?: string;
  themeInput?: string;
  variant?: TTextInputVariant;
  size?: TTextInputSize;
  text?: ReactNode;
  style?: any;
  onChangeText?: () => void;
  value?: string;
  placeholder?: string;
}
