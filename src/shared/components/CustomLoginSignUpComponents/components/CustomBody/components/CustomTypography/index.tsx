import React from 'react';
import { ICustomTypography } from './types';
import { StyledTyphography } from './styles';

const CustomTypography: ICustomTypography = ({ checkboxText }) => {
  return <StyledTyphography>{checkboxText}</StyledTyphography>;
};

export default CustomTypography;
