import React from 'react'

import AppSidebarNavItem from './AppSidebarNavItem'

const AppSidebarNavList = props => {
  const { items = [], isCollapsed = false, isNested = false } = props
  // const classes = useStyles()

  return (
    <>
      {items.map((item, index) => (
        <AppSidebarNavItem
          {...item}
          isCollapsed={isCollapsed}
          isNested={isNested}
          key={index}
        />
      ))}
    </>
  )
}

export default AppSidebarNavList
