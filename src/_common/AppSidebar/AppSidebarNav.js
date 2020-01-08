import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import IconSales from '@material-ui/icons/MonetizationOn'
import IconProfile from '@material-ui/icons/AccountBox'
import IconAccount from '@material-ui/icons/AccountBalance' //
import IconAdmin from '@material-ui/icons/VpnKey'
import IconMisc from '@material-ui/icons/MoreHoriz'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconProducts from '@material-ui/icons/LocalMall'
import IconOrders from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconPersonalVideo from '@material-ui/icons/PersonalVideo'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconStars from '@material-ui/icons/Stars'
import IconNewReleases from '@material-ui/icons/NewReleases'
import IconSettings from '@material-ui/icons/Settings'
import IconGroup from '@material-ui/icons/Group'
import IconInfo from '@material-ui/icons/Info' //
import IconPreson from '@material-ui/icons/Person' //
// import IconSync from '@material-ui/icons/Sync'
// import IconPhone from '@material-ui/icons/Phone'
import IconStock from '@material-ui/icons/LocalShipping'
import IconLocation from '@material-ui/icons/LocationOn'

import SidebarNavItems from './AppSidebarNavList'

const SidebarNav = props => {
  const { isCollapsed } = props
  const classes = useStyles()

  const itemsSales = [
    {
      name: 'Sales Dashboard',
      link: '/sales/dashboard',
      Icon: IconDashboard,
    },
    {
      name: 'Orders',
      link: '/sales/orders',
      Icon: IconOrders,
    },
    {
      name: 'Customers',
      link: '/sales/customers',
      Icon: IconPeople,
    },
    {
      name: 'Products',
      Icon: IconProducts,
      items: [
        {
          name: 'All Products',
          link: '/sales/products',
        },
        {
          name: 'Add New',
          link: '/sales/products/new',
        },
        {
          name: 'Categories',
          link: '/sales/products/categories',
        },
      ],
    },
    {
      name: 'Stock',
      link: '/sales/stock',
      Icon: IconStock,
    },
    {
      name: 'Locations',
      link: '/sales/locations',
      Icon: IconLocation,
    },
  ]

  // eslint-disable-next-line
  const itemsContent = [
    {
      name: 'All Items',
      link: '/content/items',
    },
    {
      name: 'Add New',
      link: '/content/items/new',
    },

    {
      name: 'Categories',
      link: '/content/categories',
    },
  ]

  const itemsAuth = [
    {
      name: 'Login',
      link: '/auth/login',
    },
    {
      name: 'Signup',
      link: '/auth/signup',
    },
    {
      name: 'Recover',
      link: '/auth/recover',
    },
    {
      name: 'Reset',
      link: '/auth/reset',
    },
  ]

  const itemsAccount = [
    {
      name: 'Profile',
      items: [
        {
          name: 'My Profile',
          link: '/profile/me',
        },
        {
          name: 'User Profile',
          link: '/profile/user/2',
        },
        {
          name: 'Profile Settings',
          link: '/profile/settings',
        },
      ],
    },
    {
      name: 'Organization',
      items: [
        {
          name: 'My Organizations',
          link: '/organizations',
        },
        {
          name: 'Organization Settings',
          link: '/organizations/1/settings',
        },
      ],
    },
  ]

  const itemsAdmin = [
    {
      name: 'Admin Dashboard',
      link: '/admin/dashboard',
      Icon: IconDashboard,
    },
    {
      name: 'All Organizations',
      link: '/admin/accounts',
      Icon: IconAccount,
    },
    {
      name: 'All Users',
      link: '/admin/users',
      Icon: IconGroup,
    },
  ]

  const itemsMisc = [
    {
      name: 'Search',
      link: '/search',
    },
    {
      name: 'Not Found',
      link: '/notfound',
    },
  ]

  const itemsCoreModules = [
    {
      name: 'Auth',
      items: itemsAuth,
      Icon: IconPreson,
    },
    {
      name: 'Account',
      items: itemsAccount,
      Icon: IconProfile,
    },
    {
      name: 'Administration',
      items: itemsAdmin,
      Icon: IconAdmin,
    },
    {
      name: 'Misc Pages',
      items: itemsMisc,
      Icon: IconMisc,
    },
  ]

  const itemsTheme = [
    {
      name: 'Why Modular?',
      link: '/demo/features',
      Icon: IconNewReleases,
      IconClassName: classes.iconFeatures,
    },
    {
      name: 'Docs',
      link: '/demo/docs',
      Icon: IconLibraryBooks,
      IconClassName: classes.iconDocs,
    },
    {
      name: 'Supporters',
      link: '/demo/supporters',
      Icon: IconStars,
      IconClassName: classes.iconSupporters,
    },
    {
      name: 'Discuss',
      link: '/demo/discuss',
      Icon: IconQuestionAnswer,
      IconClassName: classes.iconDiscuss,
    },
  ]

  return (
    <div>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Sales Management
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsSales} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Content Management
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsContent} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Core Modules
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsCoreModules} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Misc
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsTheme} />
      </List>
    </div>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    navList: {
      width: theme.sidebar.width,
      fontSize: '1.1em',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    navListHeader: {
      textAlign: 'center',
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
