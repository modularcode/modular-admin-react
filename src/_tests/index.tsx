// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import 'jest-canvas-mock'
import '@testing-library/jest-dom'

import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { IntlProvider } from 'react-intl'

import theme from '../_theme'

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <IntlProvider locale={'en-US'}>
      <ThemeProvider theme={theme}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </IntlProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Line: () => null,
}))

export * from '@testing-library/react'

export { customRender as render }
