import { IPaletteOptions } from './types';

// const lighPalette: IPaletteOptions = {
//   type: 'light'
// };

const darkPalette: IPaletteOptions = {
  type: 'dark'
};

export const palette = (type: string) => {
  type === 'dark' ? darkPalette : darkPalette;
};
