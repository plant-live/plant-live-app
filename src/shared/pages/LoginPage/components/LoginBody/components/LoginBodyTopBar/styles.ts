import { darkColors } from '@/shared/theme/colors';
import { Button, Grid, Typography, styled } from '@mui/material';

export const StyledWrapper = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  '&.buttonWrapper': {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    color: `${darkColors.text.white}`
  }
});

export const StyledTypography = styled(Typography)({
  color: `${darkColors.text.white}`,
  fontWeight: 700,

  '&.buttonText': {
    fontSize: '16px',
    textTransform: 'none',
    color: `${darkColors.text.button.secondary}`
  }
});

export const StyleButton = styled(Button)({
  backgroundColor: `${darkColors.background.primary}`,
  width: '100%',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: `${darkColors.background.primaryOnHover}`,
    color: `${darkColors.text.white}`,

    '& .MuiTypography-root': {
      color: `${darkColors.text.primaryOnHover}`
    }
  }
});
