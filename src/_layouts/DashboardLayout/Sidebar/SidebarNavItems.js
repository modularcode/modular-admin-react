import React from 'react'

import SidebarNavItem from './SidebarNavItem'

const SidebarNavItems = props => {
  const { items = [], isCollapsed = false, isNested = false } = props
  // const classes = useStyles()

  return (
    <>
      {items.map((item, index) => (
        <SidebarNavItem
          {...item}
          isCollapsed={isCollapsed}
          isNested={isNested}
          key={index}
        />
      ))}
    </>
  )
}

export default SidebarNavItems
