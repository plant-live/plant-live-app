import React from 'react';
import { IDashboarContainer } from './types';
import { StyledContainer } from './styles';
import TopBar from './components/TopBar';

const DashboardContainer: IDashboarContainer = ({ children }) => {
  return (
    <StyledContainer>
      <TopBar />
      {children}
    </StyledContainer>
  );
};

export default DashboardContainer;
