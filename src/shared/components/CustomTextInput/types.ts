import { TextFieldProps } from '@mui/material';

export interface ICustomTextInputProps {
  width: string;
  borderColor: string;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
}

export type ICustomTextInput = (props: ICustomTextInputProps) => JSX.Element;
