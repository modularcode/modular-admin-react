import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Client from './Client';

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

render(Client);

if (module.hot) {
  module.hot.accept('./Client', () => render(Client));
}
