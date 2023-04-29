import Image from 'next/image';
import React from 'react';
import { StyleButton, StyledTypography, StyledWrapper } from './styles';
import { Typography } from '@mui/material';
import { GoogleIcon } from '@/icons';
import CustomDivider from '@/shared/components/CustomDivider';

const LoginBodyTopBar = () => {
  return (
    <StyledWrapper>
      <Image
        src='/assets/loginLogo.png'
        alt='Plante live logo'
        width='33'
        height='33'
      />
      <StyledTypography>Hi, Welcome Back</StyledTypography>
      <StyleButton disableRipple>
        <StyledWrapper className='buttonWrapper'>
          <GoogleIcon />
          <StyledTypography className='buttonText'>
            Sign up with Google
          </StyledTypography>
        </StyledWrapper>
      </StyleButton>
      <CustomDivider />
      <StyledTypography className='dividerText'>
        Sign in with Email address
      </StyledTypography>
    </StyledWrapper>
  );
};

export default LoginBodyTopBar;
