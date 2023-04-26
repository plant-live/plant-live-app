export interface IDashboardContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

export type IDashboarContainer = (
  props: IDashboardContainerProps
) => JSX.Element;
