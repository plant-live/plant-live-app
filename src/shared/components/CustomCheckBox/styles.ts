import { darkColors } from '@/shared/theme/colors';
import { Checkbox, styled } from '@mui/material';

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: `${darkColors.borderColor.primary}`,
  '&.Mui-checked': {
    color: `${darkColors.borderColor.primary}`,
    '& .MuiSvgIcon-root': {
      fill: `${darkColors.borderColor.primary}`
    }
  }
}));
