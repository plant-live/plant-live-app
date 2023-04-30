import { TextField, styled } from '@mui/material';
import { ICustomTextInputProps } from './types';

// interface ICustomTextFieldProps {
//   width: string;
//   borderColor: string;
// }

// export const StyledTextField = styled(TextField)<ICustomTextFieldProps>(({width}){
//   width: `${}`
// });

export const StyledTextField = styled(TextField)<ICustomTextInputProps>(
  ({ width, borderColor, variant }) => ({
    width: width,
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
