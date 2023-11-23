import {ReactNode} from 'react';

export type TButtonVariant = 'primary1' | 'primary2' | 'primary3' | 'secondary';

export type TButtonSize = 'default' | 'small' | 'large';

export interface IButtonProps {
  className?: string;
  themeInput?: string;
  isFullWidth?: boolean;
  variant?: TButtonVariant;
  size?: TButtonSize;
  children?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  style?: any;
}
