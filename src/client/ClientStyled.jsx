import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
/* eslint-enable */


export default {};
