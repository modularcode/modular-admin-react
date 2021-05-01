import React from 'react'
import { render, waitFor, screen } from '_tests/'
import KeyMetrics from './KeyMetrics'

describe('Dashboard/KeyMetrics', () => {
  it('has 4 key metrics', async () => {
    render(<KeyMetrics />)

    // wait for headings to appear
    await waitFor(() => screen.getAllByRole('heading'))

    const Headings = screen.getAllByRole('heading')

    expect(Headings).toHaveLength(4)
  })
})
