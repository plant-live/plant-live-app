import DashboardContainer from '@/shared/components/DashboardContainer';
import React from 'react';
import Footer from '../../components/Footer';
import { StyledLoginWrapper } from './styles';
import LoginBody from './components/LoginBody';
import { ILoginPage } from './types';

const LoginPage: ILoginPage = () => {
  return (
    <StyledLoginWrapper>
      <LoginBody />
      <Footer />
    </StyledLoginWrapper>
  );
};

export default LoginPage;
