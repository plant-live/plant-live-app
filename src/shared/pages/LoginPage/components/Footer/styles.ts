import { darkColors } from '@/shared/theme/colors';
import { styled, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

export const StyledWrapper = styled('div')({
  position: 'fixed',
  backgroundColor: `${darkColors.background.primary}`,
  bottom: '34px',
  width: '100%',
  display: 'flex',
  padding: '0 40px 0 40px',
  justifyContent: 'space-between'
});

export const StyledTypography = styled(Typography)({
  color: `${darkColors.text.primary}`
});
