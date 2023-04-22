export interface ITesteProps {
  titulo: string;
  texto: string;
}

export type ITeste = (props: ITesteProps) => JSX.Element;
