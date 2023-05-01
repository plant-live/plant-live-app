import { darkColors } from '@/shared/theme/colors';
import { styled, Grid } from '@mui/material';

export const StyledLoginWrapper = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  flex: 1
});

export const StyledBodyWrapper = styled(Grid)({
  width: '50.8rem',
  height: '76.1rem',
  backgroundColor: `${darkColors.background.secondary} `,
  borderRadius: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  padding: '4rem',
  gap: '2.4rem'
});
