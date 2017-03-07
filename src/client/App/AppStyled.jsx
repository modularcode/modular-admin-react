import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const AppContainer = styled.div`
  position: absolute;
  padding-left: 200px;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: #efefef;
`;

export const AppContent = styled.article`
  position: absolute;
  left: 250px;
  top: 100px;
  right: 0;
  bottom: 0;
  background-color: #ccc;
`;


export default {
  AppContainer,
};
