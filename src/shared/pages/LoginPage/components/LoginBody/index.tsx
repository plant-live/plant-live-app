import React from 'react';
import { StyledBodyWrapper } from './styles';
import CustomTopBar from '../../../../components/CustomLoginSignUpComponents/components/CustomTopBar';
import CustomBody from '../../../../components/CustomLoginSignUpComponents/components/CustomBody';

const LoginBody = () => {
  return (
    <StyledBodyWrapper>
      <CustomTopBar />
      <CustomBody />
    </StyledBodyWrapper>
  );
};

export default LoginBody;
