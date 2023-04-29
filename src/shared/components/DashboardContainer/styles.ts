import { darkColors } from '@/shared/theme/colors';
import { styled, Container } from '@mui/material';

export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: `${darkColors.background.primary}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}));
