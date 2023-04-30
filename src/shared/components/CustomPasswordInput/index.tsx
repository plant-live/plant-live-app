import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import {
  StyledFilledInput,
  StyledFormControl,
  StyledIconButton
} from './styles';

const CustomPasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <StyledFormControl variant='filled'>
      <InputLabel htmlFor='filled-adornment-password'>Password</InputLabel>
      <StyledFilledInput
        disableUnderline
        id='filled-adornment-password'
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <StyledIconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </StyledIconButton>
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );
};

export default CustomPasswordInput;
