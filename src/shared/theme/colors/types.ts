export interface IDarkColors {
  text: {
    primary: string;
    primaryOnHover: string;
    white: string;
    button: {
      secondary: string;
    };
  };
  background: {
    primary: string;
    primaryOnHover: string;
    secondary: string;
  };
  divider: string;
  borderColor: {
    primary: string;
  };
}

type SLA = () => number;
