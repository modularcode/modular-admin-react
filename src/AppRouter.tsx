import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom' //

import config from './_config'

import DashboardLayout from '_layouts/DashboardLayout'
import { Auth } from './Auth'
import { Administration } from './Administration'
import { Dashboard } from './Dashboard'

// Use different router type depending on configuration
const AppRouterComponent: React.FC = ({ children }) => {
  return config.navigationType === 'history' ? (
    <BrowserRouter>{children}</BrowserRouter>
  ) : (
    <HashRouter>{children}</HashRouter>
  )
}

const AppRouter: React.FC = () => {
  return (
    <AppRouterComponent>
      <Switch>
        <Route path="/auth" component={Auth} />
        <RouteWithLayout
          exact
          path={`/`}
          component={Dashboard}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path={`/administration`}
          component={Administration}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path={`/account`}
          component={() => null}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path={`/settings`}
          component={() => null}
          layout={DashboardLayout}
        />
      </Switch>
    </AppRouterComponent>
  )
}

export interface RouteWithLayoutProps extends RouteProps {
  layout: React.ComponentType<any>
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  component: Component,
  layout: Layout,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!Component) return null

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
    >
      {children}
    </Route>
  )
}

export default AppRouter
