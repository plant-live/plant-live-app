import { createTheme as createThemeV5 } from '@mui/material/styles';

import { palette } from './palette';

export const ThemeSelectorV5 = (type) => {
  let theme;

  if (type === 'dark') {
    theme = createThemeV5({
      palette: palette('dark'),
      zIndex: {
        appBar: 1100,
        drawer: 1200
      }
    });
  } else {
    theme = createThemeV5({
      palette: palette('light'),
      zIndex: {
        appBar: 1100,
        drawer: 1200
      }
    });
  }

  return createThemeV5({
    ...theme
  });
};
