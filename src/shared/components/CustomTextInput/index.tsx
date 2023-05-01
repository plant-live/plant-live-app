import React from 'react';
import { StyledTextField } from './styles';
import { ICustomTextInput } from './types';

const CustomTextInput: ICustomTextInput = ({
  borderColor,
  width,
  label,
  variant
}) => {
  label;
  return (
    <StyledTextField
      borderColor={borderColor}
      width={width}
      label={label}
      variant={variant}
    />
  );
};

export default CustomTextInput;
