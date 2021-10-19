export interface imgInterface {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export interface typoInterface {
  variant?:
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'caption'
  | 'body1'
  | 'body2'
  | 'button'
  | 'link';
  color?: 
  | 'primary'
  | 'primary800'
  | 'primary700'
  | 'primary600'
  | 'primary500'
  | 'primary400'
  | 'primary300'
  | 'primary200'
  | 'primary100'
  | 'gray500'
  | 'gray400'
  | 'gray300'
  | 'gray200'
  | 'gray100'
  | 'gray50'
  | 'error200'
  | 'error100'
  | 'warning200'
  | 'warning100'
  | 'success200'
  | 'success100';
}