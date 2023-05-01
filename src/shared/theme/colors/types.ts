export interface IDarkColors {
  text: {
    primary: string;
    secondary: string;
    primaryOnHover: string;
    white: string;
    tertiary: string;
  };
  background: {
    primary: string;
    primaryOnHover: string;
    secondary: string;
    tertiary: string;
    tertiaryOnHover: string;
  };
  divider: string;
  borderColor: {
    primary: string;
  };
}

type SLA = () => number;
