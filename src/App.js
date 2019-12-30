import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './_theme'
import AppRouter from './AppRouter'

console.log('theme', theme)

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter />
    </div>
  )
}
export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
