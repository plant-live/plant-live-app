import { darkColors } from '@/shared/theme/colors';
import { FilledInput, FormControl, IconButton, styled } from '@mui/material';

export const StyledFormControl = styled(FormControl)({
  width: '100%',
  borderRadius: '1.2rem',
  backgroundColor: `${darkColors.background.primary}`,
  caretColor: `${darkColors.borderColor.primary}`,

  '& .MuiInputLabel-root': {
    color: `${darkColors.borderColor.primary}`,
    '&.Mui-focused': {
      color: `${darkColors.borderColor.primary}`
    }
  }
});

export const StyledFilledInput = styled(FilledInput)({
  color: `${darkColors.text.white}`
});

export const StyledIconButton = styled(IconButton)({
  color: `${darkColors.borderColor.primary}`
});
