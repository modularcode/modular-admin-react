import React from 'react'
import { render, screen } from '_tests'
import AppSidebar from './AppSidebar'

test('renders learn react link', () => {
  render(<AppSidebar />)
  expect(screen.getByLabelText('Modular Admin link')).toBeInTheDocument()
})
