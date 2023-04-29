import { darkColors } from '@/shared/theme/colors';
import { Button, Grid, Typography, styled } from '@mui/material';

export const StyledWrapper = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',

  '&.buttonWrapper': {
    display: 'flex',
    flexDirection: 'row',
    color: `${darkColors.text.white}`
  }
});

export const StyledTypography = styled(Typography)({
  color: `${darkColors.text.white}`,

  '&.buttonText': {
    fontSize: '16px',
    textTransform: 'none',
    color: `${darkColors.text.button.secondary}`
  }
});

export const StyleButton = styled(Button)({
  backgroundColor: `${darkColors.background.primary}`,
  width: '100%'
});
