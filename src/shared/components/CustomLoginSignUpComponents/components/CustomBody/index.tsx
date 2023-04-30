import React from 'react';
import { StyledTyphography, StyledWrapper } from './styles';
import { darkColors } from '@/shared/theme/colors';
import CustomTextInput from '@/shared/components/CustomTextInput';
import CustomPasswordInput from '../../../CustomPasswordInput';
import { ICustomBody } from './types';
import CustomTypography from './components/CustomTypography';
import { FormControlLabel } from '@mui/material';
import CustomCheckBoxComponent from '@/shared/components/CustomCheckBox';

const CustomBody: ICustomBody = ({ checkboxText }) => {
  return (
    <StyledWrapper>
      <CustomTextInput
        width='100%'
        borderColor={`${darkColors.borderColor.primary}`}
        label='Email Address'
      />
      <CustomPasswordInput />
      <StyledWrapper className='textContentWrapper'>
        <FormControlLabel
          value='end'
          control={<CustomCheckBoxComponent />}
          label={<CustomTypography checkboxText={checkboxText} />}
          labelPlacement='end'
        />
        <StyledTyphography>Forgot Password?</StyledTyphography>
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default CustomBody;
