import { darkColors } from '@/shared/theme/colors';
import { Divider, Grid, Typography, styled } from '@mui/material';

export const StyledWrapper = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '1rem',

  '&.centerContent': {
    width: '136px',
    height: '44px',
    borderRadius: '12px',
    border: `1px solid ${darkColors.background.divider}`,
    padding: '10px'
  }
});

export const StyledDivider = styled(Divider)({
  height: '1px',
  width: '136px',
  backgroundColor: `${darkColors.background.divider}`
});

export const StyledTypography = styled(Typography)({
  color: `${darkColors.text.primary}`
});
