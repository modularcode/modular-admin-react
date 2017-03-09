import styled from 'styled-components';

export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: ${props => props.theme.sidebarWidth}px;

  background-color: #efefef;
`;

export const AppContent = styled.article`
  min-height: 100vh;
  padding-top: ${props => props.theme.headerHeight}px;
  padding-bottom: ${props => props.theme.footerHeight}px;

  background-color: #ccc;
`;


export default {
  AppContainer,
  AppContent,
};
