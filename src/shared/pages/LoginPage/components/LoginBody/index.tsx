import React from 'react';
import { StyledBodyWrapper } from './styles';
import LoginBodyTopBar from './components/LoginBodyTopBar';

const LoginBody = () => {
  return (
    <StyledBodyWrapper>
      <LoginBodyTopBar />
    </StyledBodyWrapper>
  );
};

export default LoginBody;
