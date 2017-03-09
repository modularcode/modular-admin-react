import styled from 'styled-components';

export const HeaderContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  height: ${props => props.theme.headerHeight}px;
  left: ${props => props.theme.sidebarWidth}px;
  right: 0;

  background-color: ${props => props.theme.headerBackgroundColor};
  transition: left 0.3s ease;
  z-index: 10;
`;


export default {
  HeaderContainer,
};
