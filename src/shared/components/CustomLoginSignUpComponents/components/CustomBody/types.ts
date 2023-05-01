export interface ICustomBodyProps {
  checkboxText: string;
}

export type ICustomBody = (props: ICustomBodyProps) => JSX.Element;
