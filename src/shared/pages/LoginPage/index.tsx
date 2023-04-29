import DashboardContainer from '@/shared/components/DashboardContainer';
import React from 'react';
import LoginFooter from './components/Footer';
import { StyledLoginWrapper } from './styles';
import LoginBody from './components/LoginBody';
import { ILoginPage } from './types';

const LoginPage: ILoginPage = () => {
  return (
    <StyledLoginWrapper>
      <LoginBody />
      <LoginFooter />
    </StyledLoginWrapper>
  );
};

export default LoginPage;
