import { darkColors } from '@/shared/theme/colors';
import { Divider, Grid, Typography, styled } from '@mui/material';

export const StyledWrapper = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',

  '& .textContentWrapper': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
});

export const StyledTyphography = styled(Typography)(({ theme }) => ({
  font: theme.spacing(2),
  color: `${darkColors.text.primary}`
}));

export const StyledDivider = styled(Divider)({
  // border: `0.01rem solid red`,
  width: '100%'
});
