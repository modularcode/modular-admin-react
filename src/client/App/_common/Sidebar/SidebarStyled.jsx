import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background-color: ${props => props.theme.sidebarBackgroundColor};
  width: ${props => props.theme.sidebarWidth}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  transition: left 0.3s ease;
  z-index: 20;
`;


export default {
  SidebarContainer,
};
