import React from 'react'

import NavItem from './NavItem'

import { ISidebarNavItem } from './SidebarNav'

export interface IAppSidebarNavList {
  isNested?: boolean
  isCollapsed?: boolean
  items: ISidebarNavItem[]
}

const AppSidebarNavList: React.FC<IAppSidebarNavList> = (props) => {
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
