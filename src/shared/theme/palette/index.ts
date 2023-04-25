import { white } from '../colors';
import { IDefaultPaleteOptions, IPaletteOptions } from './types';

const defaultPalette: IDefaultPaleteOptions = {
  // Object to populate with common colors ans styles for black and white mode.
  // Don't forget to add them to types
  // Example:
  axes: {
    x: 'rgb(35, 134, 203, 0.35)',
    y: '#cc337d',
    z: '#B48A00'
  }
};

// TODO: COLORS ARE NOT CORRET YET, I JUST CREATE COLORS PALLETE WE NEED TO POPULATE IT
// const lighPalette: IPaletteOptions = {
//   ...defaultPalette,
//   type: 'light',
//   primary: {
//     contrastText: white,
//     main: '#2E3552',
//     light: '#F6F9FD',
//     dark: '#252a42',
//     shade1: '#3b4469',
//     shade2: '#485380',
//     shade3: '#546197',
//     shade4: '#6673a9'
//   }
// };

// TODO: COLORS ARE NOT CORRET YET, I JUST CREATE COLORS PALLETE WE NEED TO POPULATE IT
const darkPalette: IPaletteOptions = {
  type: 'dark',
  primary: {
    contrastText: white,
    main: '#6675B8',
    light: '#222533',
    dark: '#525E93',
    shade1: '#7885C0',
    shade2: '#9EA8D2',
    shade3: '#C5CBE4',
    shade4: '#ECEEF6'
  }
};

export const palette = (type: string) => {
  type === 'dark' && darkPalette;
};
