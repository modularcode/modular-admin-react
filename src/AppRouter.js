import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom' //

import config from './_config'

import DashboardLayout from '_layouts/DashboardLayout'
import { Auth } from './Auth'
import { Administration } from './Administration'
import { Dashboard } from './Dashboard'

// Use different router type depending on configuration
const AppRouterComponent =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const AppRouter = () => (
  <AppRouterComponent>
    <Switch>
      {/* <Route exact path="/" render={() => <Redirect to="/sales/dashboard" />} /> */}
      <Route path="/auth" component={Auth} />
      <RouteWithLayout exact path={`/`} component={Dashboard} layout={DashboardLayout} />
      <RouteWithLayout
        path={`/administration`}
        component={Administration}
        layout={DashboardLayout}
      />
      {/* <Route path="/" component={DashboardLayout} /> */}
      {/* <RoutePrivate path="/" component={LoggedInRouter} /> */}
    </Switch>
  </AppRouterComponent>
)

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (Layout) {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      } else {
        return <Component {...props} />
      }
    }}
  />
)

export default AppRouter
