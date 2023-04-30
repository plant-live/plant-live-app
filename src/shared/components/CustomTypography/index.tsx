import React from 'react';
import { ICustomTypography } from './types';
import { StyledTyphography } from './styles';

const CustomTypography: ICustomTypography = ({ text }) => {
  return <StyledTyphography>{text}</StyledTyphography>;
};

export default CustomTypography;
