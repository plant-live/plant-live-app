import React from 'react';
import { StyledBodyWrapper } from './styles';
import LoginBodyTopBar from './components/LoginBodyTopBar';
import LoginFormBody from './components/LoginFormBody';

const LoginBody = () => {
  return (
    <StyledBodyWrapper>
      <LoginBodyTopBar />
      <LoginFormBody />
    </StyledBodyWrapper>
  );
};

export default LoginBody;
