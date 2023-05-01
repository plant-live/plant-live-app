import { Divider } from '@mui/material';
import React from 'react';
import { StyledDivider, StyledTypography, StyledWrapper } from './styles';

const CustomDivider = () => {
  return (
    <StyledWrapper>
      <StyledDivider />
      <StyledWrapper className='centerContent'>
        <StyledTypography> or </StyledTypography>
      </StyledWrapper>
      <StyledDivider />
    </StyledWrapper>
  );
};

export default CustomDivider;
