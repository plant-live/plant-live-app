import React from 'react';
import { StyledWrapper } from './styles';
import { darkColors } from '@/shared/theme/colors';
import CustomTextInput from '@/shared/components/CustomTextInput';
import PasswordInput from './components/PasswordInput';

const LoginFormBody = () => {
  return (
    <StyledWrapper>
      <CustomTextInput
        width='100%'
        borderColor={`${darkColors.borderColor.primary}`}
        label='Email Address'
      />
      <PasswordInput />
    </StyledWrapper>
  );
};

export default LoginFormBody;
