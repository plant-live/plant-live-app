import { darkColors } from '@/shared/theme/colors';
import { Grid, styled } from '@mui/material';

export const StyledBodyWrapper = styled(Grid)({
  width: '50.8rem',
  height: '76.1rem',
  backgroundColor: `${darkColors.background.secondary} `,
  borderRadius: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  padding: '4rem'
});
