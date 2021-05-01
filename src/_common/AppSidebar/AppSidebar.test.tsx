import React from 'react'
import { render, screen } from '_tests'
import AppSidebar from './AppSidebar'

describe('AppSidebar', () => {
  it('renders without crashing', () => {
    render(<AppSidebar />)
  })
})
