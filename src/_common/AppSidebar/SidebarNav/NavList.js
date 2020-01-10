import React from 'react'

import NavItem from './NavItem'

const AppSidebarNavList = props => {
  const { items = [], isCollapsed = false, isNested = false } = props
  // const classes = useStyles()

  return (
    <>
      {items.map((item, index) => (
        <NavItem {...item} isCollapsed={isCollapsed} isNested={isNested} key={index} />
      ))}
    </>
  )
}

export default AppSidebarNavList
