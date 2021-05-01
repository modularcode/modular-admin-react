import React from 'react'
import { render, screen } from '_tests'
import SidebarNav from './SidebarNav'

describe('SidebarNav', () => {
  it('renders without crashing', () => {
    render(<SidebarNav />)
  })
})
