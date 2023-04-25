import {
  PaletteOptions,
  SimplePaletteColorOptions,
  TypeBackground
} from '@mui/material';

export interface IPaletteOptions extends PaletteOptions {
  type: 'light' | 'dark';
  primary?: {
    shade1: string;
    shade2: string;
    shade3: string;
    shade4: string;
  } & SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  text?: {
    primary?: string;
    secondary?: string;
    disabled?: string;
    light?: string;
    dark?: string;
    special?: string;
  };
  background?: {
    secondary: string;
  } & TypeBackground;
  border?: string;
}

export interface IDefaultPalette extends PaletteOptions {
  // Example of Populating IDefaultPalette
  axes: {
    x: string;
    y: string;
    z: string;
  };
}

export type IDefaultPaleteOptions = PaletteOptions & IDefaultPalette;
