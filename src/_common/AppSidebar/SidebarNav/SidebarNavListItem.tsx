import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'

// import { makeStyles, createStyles } from '@material-ui/core/styles'

export interface ISidebarNavListItem {
  name: string
  link?: string
  Icon?: any
  IconClassName?: string
  items?: ISidebarNavListItem[]
}

export interface ISidebarNavListItemProps extends ISidebarNavListItem {}

const SidebarNavListItem: React.FC<ISidebarNavListItemProps> = (props) => {
  const { name, items = [] } = props

  const [open, setOpen] = React.useState(false)

  const handleItemClick = (e: React.MouseEvent) => {
    e.preventDefault()

    setOpen(!open)
  }

  return (
    <ListItem>
      <a href="/" onClick={handleItemClick}>
        {name}
      </a>

      {items.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((item: ISidebarNavListItem) => (
              <SidebarNavListItem {...item} key={item.name || item.link} />
            ))}
          </List>
        </Collapse>
      )}
    </ListItem>
  )
}

export default SidebarNavListItem
