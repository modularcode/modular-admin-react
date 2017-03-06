import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import router from './router';

const rootEl = document.getElementById('root');

/* eslint-disable */
const render = (Component) => {
  return ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );
};
/* eslint-enable */

render(router);

if (module.hot) {
  module.hot.accept('./router', () => render(router));
}
