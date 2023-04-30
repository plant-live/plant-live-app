import React from 'react';
import { StyledBodyWrapper } from './styles';
import CustomTopBar from './components/CustomTopBar';
import CustomBody from './components/CustomBody';

export const CustomLoginSingUpComponent = () => {
  return (
    <StyledBodyWrapper>
      <CustomTopBar />
      <CustomBody />
    </StyledBodyWrapper>
  );
};
