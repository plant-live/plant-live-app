import React from 'react';
import { StyledDivider, StyledTyphography, StyledWrapper } from './styles';
import { darkColors } from '@/shared/theme/colors';
import CustomTextInput from '@/shared/components/CustomTextInput';
import CustomPasswordInput from '../../../CustomPasswordInput';
import { ICustomBody } from './types';
import CustomTypography from '../../../CustomTypography';
import { Divider, FormControlLabel } from '@mui/material';
import CustomCheckBoxComponent from '@/shared/components/CustomCheckBox';
import CustomButton from '@/shared/components/CustomButton';

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
          label={<CustomTypography text={checkboxText} />}
          labelPlacement='end'
        />
        <StyledTyphography>Forgot Password?</StyledTyphography>
      </StyledWrapper>
      <CustomButton
        backgroundColor={`${darkColors.background.tertiary}`}
        buttonText='Sign in'
        fontColor={`${darkColors.text.tertiary}`}
        fontOnHover={`${darkColors.text.secondary}`}
        backgroundOnHover={`${darkColors.background.tertiaryOnHover}`}
        variant='contained'
      />
      <StyledDivider />
      <CustomTypography text='Don’t have a account?' />
      <CustomButton
        backgroundColor={`${darkColors.background.secondary}`}
        buttonText='Sign up now'
        fontColor={`${darkColors.text.primary}`}
        variant='outlined'
        fontOnHover={`${darkColors.text.primary}`}
        backgroundOnHover={`${darkColors.background.primary}`}
      />
    </StyledWrapper>
  );
};

export default CustomBody;
