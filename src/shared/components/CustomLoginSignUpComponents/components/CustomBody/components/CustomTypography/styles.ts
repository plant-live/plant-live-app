import { darkColors } from '@/shared/theme/colors';
import { Typography, styled } from '@mui/material';

export const StyledTyphography = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: `${darkColors.text.primary}`
}));
