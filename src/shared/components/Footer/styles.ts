import { darkColors } from '@/shared/theme/colors';
import { styled, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

export const StyledWrapper = styled('div')({
  position: 'fixed',
  backgroundColor: `${darkColors.background.primary}`,
  bottom: '3.4rem',
  width: '100%',
  display: 'flex',
  padding: '0 4rem 0 4rem',
  justifyContent: 'space-between'
});

export const StyledTypography = styled(Typography)({
  color: `${darkColors.text.primary}`
});
