import { darkColors } from '@/shared/theme/colors';
import { Grid, styled } from '@mui/material';

export const StyledBodyWrapper = styled(Grid)({
  width: '508px',
  height: '761px',
  backgroundColor: `${darkColors.background.secondary} `,
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  padding: '40px'
});
