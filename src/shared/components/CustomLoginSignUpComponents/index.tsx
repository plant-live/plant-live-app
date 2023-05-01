import React from 'react';
import { StyledBodyWrapper } from './styles';
import CustomTopBar from './components/CustomTopBar';
import CustomBody from './components/CustomBody';
import { ICustomLoginSingUpComponent } from './types';

export const CustomLoginSingUpComponent: ICustomLoginSingUpComponent = ({
  checkboxText
}) => {
  return (
    <StyledBodyWrapper>
      <CustomTopBar />
      <CustomBody checkboxText={checkboxText} />
    </StyledBodyWrapper>
  );
};
