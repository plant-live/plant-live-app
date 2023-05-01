import DashboardContainer from '@/shared/components/DashboardContainer';
import React from 'react';
import Footer from '../../components/Footer';
import { StyledLoginWrapper } from './styles';
import { ILoginPage } from './types';
import { CustomLoginSingUpComponent as LoginBody } from '@/shared/components/CustomLoginSignUpComponents';

const LoginPage: ILoginPage = () => {
  return (
    <StyledLoginWrapper>
      <LoginBody checkboxText='Remember me' />
      <Footer />
    </StyledLoginWrapper>
  );
};

export default LoginPage;
