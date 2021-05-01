import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import { itemsCore /*, itemsTheme */ } from './SidebarNavService'
import SidebarNavListItem, { SidebarNavListItemProps } from './SidebarNavListItem'

export type SidebarNavProps = {
  // isCollapsed?: boolean
}

const SidebarNav: React.FC<SidebarNavProps> = (props) => {
  // const { isCollapsed } = props
  const classes = useStyles()

  return (
    <div>
      <List className={classes.navList} disablePadding>
        <ListSubheader disableSticky={true} className={classes.navListHeader}>
          Core Modules
        </ListSubheader>
      </List>

      {itemsCore.map((item: SidebarNavListItemProps) => {
        return <SidebarNavListItem {...item} key={item.name} />
      })}

      <List className={classes.navList} disablePadding>
        <ListSubheader disableSticky={true} className={classes.navListHeader}>
          Misc
        </ListSubheader>
      </List>
    </div>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    navList: {
      width: theme.sidebar.width,
      fontSize: '1em',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    navListHeader: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.5)',
    },
    iconFeatures: {
      color: '#95de3c',
    },
    iconDocs: {
      color: '#f8cda9',
    },
    iconSupporters: {
      color: '#e3b546',
    },
    iconDiscuss: {
      color: '#ccc',
    },
  }),
)

export default SidebarNav
