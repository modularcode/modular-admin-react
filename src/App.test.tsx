import React from 'react'
import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard/Dashboard'

test('renders learn react link', () => {
  render(<Dashboard />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
