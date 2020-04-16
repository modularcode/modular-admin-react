import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { IntlProvider } from 'react-intl'

import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './_theme'
import AppRouter from './AppRouter'

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter />
    </div>
  )
}
export default () => (
  <IntlProvider locale={navigator.language}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </IntlProvider>
)
