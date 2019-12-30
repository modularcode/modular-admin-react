import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom' //

import config from './_config'

import DashboardLayout from '_layouts/DashboardLayout'

// Use different router type depending on configuration
const AppRouterComponent =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const AppRouter = () => (
  <AppRouterComponent>
    <Switch>
      <Route path="/" component={DashboardLayout} />
      {/* <Route path="/auth" component={Auth} /> */}
      {/* <RoutePrivate path="/" component={LoggedInRouter} /> */}
    </Switch>
  </AppRouterComponent>
)

export default AppRouter
