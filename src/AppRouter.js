import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom' //

import config from './_config'

import DashboardLayout from '_layouts/DashboardLayout'
import { Auth } from './Auth'

// Use different router type depending on configuration
const AppRouterComponent =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const AppRouter = () => (
  <AppRouterComponent>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" component={DashboardLayout} />
      {/* <RoutePrivate path="/" component={LoggedInRouter} /> */}
    </Switch>
  </AppRouterComponent>
)

export default AppRouter
