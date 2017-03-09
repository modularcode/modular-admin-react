import styled from 'styled-components';

export const FooterContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  height: ${props => props.theme.footerHeight}px;
  left: ${props => props.theme.sidebarWidth}px;
  right: 0;
  bottom: 0;

  background-color: ${props => props.theme.footerBackgroundColor};
  transition: left 0.3s ease;
  z-index: 10;
`;


export default {
  FooterContainer,
};
