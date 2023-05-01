import React from 'react';
import { StyledLogoWrapper } from './styles';
import Image from 'next/image';
import { ITopBar } from './types';
const TopBar: ITopBar = () => {
  return (
    <StyledLogoWrapper>
      <Image
        src='/assets/mainLogo.png'
        alt='Plante live logo'
        width='172'
        height='32'
      />
    </StyledLogoWrapper>
  );
};

export default TopBar;
