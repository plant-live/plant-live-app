export type ICustomButton = (props: ICustomButtonProps) => JSX.Element;

export interface ICustomButtonProps extends IButton {
  buttonText: string;
}

export interface IButton {
  variant?: 'text' | 'outlined' | 'contained';
  fontColor: string;
  fontOnHover: string;
  backgroundColor: string;
  backgroundOnHover: string;
}
