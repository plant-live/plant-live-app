import Image from 'next/image';
import React from 'react';
import { StyleButton, StyledTypography, StyledWrapper } from './styles';
import { Typography } from '@mui/material';
import { GoogleIcon } from '@/icons';

const LoginBodyTopBar = () => {
  return (
    <StyledWrapper>
      <Image
        src='/assets/loginLogo.png'
        alt='Plante live logo'
        width='33'
        height='33'
      />
      <StyledTypography variant='h4'>Hi, Welcome Back</StyledTypography>
      <StyleButton disableRipple>
        <StyledWrapper className='buttonWrapper'>
          <GoogleIcon />
          <StyledTypography className='buttonText'>
            Sign up with Google
          </StyledTypography>
        </StyledWrapper>
      </StyleButton>
    </StyledWrapper>
  );
};

export default LoginBodyTopBar;
