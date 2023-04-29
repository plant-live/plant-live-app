import { darkColors } from '@/shared/theme/colors';
import { Divider, Grid, Typography, styled } from '@mui/material';

export const StyledWrapper = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '1rem',

  '&.centerContent': {
    width: '13.6rem',
    height: '4.4rem',
    borderRadius: '1.2rem',
    border: `1px solid ${darkColors.background.divider}`,
    padding: '1rem'
  }
});

export const StyledDivider = styled(Divider)({
  height: '0.1rem',
  width: '13.6rem',
  backgroundColor: `${darkColors.background.divider}`
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: `${darkColors.text.primary}`,
  fontSize: '1.6rem'
}));
