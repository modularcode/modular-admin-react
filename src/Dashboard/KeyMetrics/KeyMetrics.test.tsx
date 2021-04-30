import React from 'react'
import { render, screen } from '_tests/'
import KeyMetrics from './KeyMetrics'

test('renders without crashing', () => {
  render(<KeyMetrics />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
