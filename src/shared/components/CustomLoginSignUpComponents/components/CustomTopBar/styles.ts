import { darkColors } from '@/shared/theme/colors';
import { Button, Grid, Typography, styled } from '@mui/material';

export const StyledWrapper = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
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
  fontSize: '2.4rem',

  '&.buttonText': {
    fontSize: '1.6rem',
    textTransform: 'none',
    color: `${darkColors.text.primary}`
  },

  '&.dividerText': {
    color: `${darkColors.text.primary}`,
    fontSize: '1.4rem'
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
