import React from 'react'
import { render, screen } from '@testing-library/react'
import KeyMetrics from './KeyMetrics'

test('renders without crashing', () => {
  render(<KeyMetrics />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
