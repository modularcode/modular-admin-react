import React, { Component } from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';

// Styles (Styled components)
import './_common/style';
import theme from './_common/theme';

// Styles (SASS)
// import './_common/style.scss';


// Components
import App from './App';
import Dashboard from './App/Dashboard';
import Items from './App/Items';
import ItemsList from './App/Items/ItemsList';
import ItemsEditor from './App/Items/ItemsEditor';

import Auth from './Auth';

export default class Client extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={Dashboard} />
            <Route path="items" component={Items} >
              <IndexRoute component={ItemsList} />
              <Route path="editor" component={ItemsEditor} />
              <Route path="editor/:itemId" component={ItemsEditor} />
            </Route>
          </Route>
          <Route path="/auth" component={Auth}>
            <Route path="login" />
            <Route path="signup" />
            <Route path="recover" />
          </Route>
        </Router>
      </ThemeProvider>
    );
  }
}
