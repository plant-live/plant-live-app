import { TextField, styled } from '@mui/material';
import { ICustomTextInputProps } from './types';

export const StyledTextField = styled(TextField)<ICustomTextInputProps>(
  ({ width, borderColor, variant }) => ({
    width: width,
    caretColor: borderColor,
    '& label': {
      color: borderColor
    },

    '& label.Mui-focused': {
      color: borderColor
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: borderColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: borderColor
      },
      '&:hover fieldset': {
        borderColor: borderColor
      },
      '&.Mui-focused fieldset': {
        borderColor: borderColor
      }
    }
  })
);
