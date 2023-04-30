import React from 'react';
import { StyledWrapper } from './styles';
import { darkColors } from '@/shared/theme/colors';
import CustomTextInput from '@/shared/components/CustomTextInput';
import CustomPasswordInput from '../../../CustomPasswordInput';

const CustomBody = () => {
  return (
    <StyledWrapper>
      <CustomTextInput
        width='100%'
        borderColor={`${darkColors.borderColor.primary}`}
        label='Email Address'
      />
      <CustomPasswordInput />
    </StyledWrapper>
  );
};

export default CustomBody;
