import React from 'react';
import { ICustomButton } from './types';
import { StyledButton } from './styles';

const CustomButton: ICustomButton = ({
  buttonText,
  variant,
  backgroundColor,
  fontColor,
  backgroundOnHover,
  fontOnHover
}) => {
  return (
    <StyledButton
      disableRipple
      fontColor={fontColor}
      variant={variant}
      backgroundColor={backgroundColor}
      backgroundOnHover={backgroundOnHover}
      fontOnHover={fontOnHover}
    >
      {buttonText}
    </StyledButton>
  );
};

export default CustomButton;
