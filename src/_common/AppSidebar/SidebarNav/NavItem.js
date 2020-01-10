import React from 'react'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconSpacer from '@material-ui/icons/FiberManualRecord'

import NavItemComponent from './NavItemComponent'

// ----------------------------------------------------------------------

const NavItemCollapsed = props => {
  const {
    name,
    link,
    Icon,
    IconStyles = {},
    IconClassName = '',
    isCollapsed,
    className,
    items = [],
  } = props
  const classes = useStyles()
  const hasChildren = items && items.length > 0

  const itemsAll = getItemsAll(items)
  const hasChildrenAndIsActive =
    hasChildren &&
    itemsAll.filter(item => `#${item.link}` === window.location.hash).length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const ListItemIconInner =
    (!!Icon && <Icon />) ||
    (isCollapsed && <IconSpacer className={classes.iconSpacer} />) ||
    ''

  const ListItemRoot = (
    <Tooltip
      disableFocusListener={true}
      disableHoverListener={true}
      disableTouchListener={true}
      title={name}
      placement="right"
    >
      <NavItemComponent
        link={link}
        className={clsx(
          classes.navItem,
          classes.navItemCollapsed,
          hasChildrenAndIsActive && 'active',
          className,
        )}
        isCollapsed={true}
        onClick={handleClick}
      >
        {!!ListItemIconInner && (
          <ListItemIcon
            style={IconStyles}
            className={clsx(classes.navItemIcon, IconClassName)}
          >
            {ListItemIconInner}
          </ListItemIcon>
        )}
        <ListItemText
          primary={name}
          disableTypography={true}
          style={{ visibility: 'hidden' }}
        />
        {hasChildren && <IconExpandLess className={classes.iconToggle} />}
      </NavItemComponent>
    </Tooltip>
  )

  const ListItemChildren = hasChildren ? (
    <div className={clsx(classes.navItemChildren)}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map(item => (
            <NavItem
              {...item}
              isNested={true}
              nestingLevel={0}
              isCollapsed={false}
              key={item.name || item.link}
              isOpen={open}
            />
          ))}
        </List>
      </Collapse>
    </div>
  ) : null

  return (
    <div
      className={clsx(
        hasChildrenAndIsActive && classes.navItemWrapperActive,
        hasChildrenAndIsActive && isCollapsed && classes.navItemWrapperActiveCollapsed,
      )}
    >
      {ListItemRoot}
      {ListItemChildren}
    </div>
  )
}

const NavItemDefault = props => {
  const {
    name,
    link,
    Icon,
    IconStyles = {},
    IconClassName = '',
    isCollapsed,
    nestingLevel = 0,
    nestingOffset = 16,
    className,
    items = [],
  } = props
  const classes = useStyles()
  const hasChildren = items && items.length > 0

  const itemsAll = getItemsAll(items)
  const hasChildrenAndIsActive =
    hasChildren &&
    itemsAll.filter(item => `#${item.link}` === window.location.hash).length > 0
  const isOpen = hasChildrenAndIsActive || false
  const [open, setOpen] = React.useState(isOpen)

  function handleClick() {
    setOpen(!open)
  }

  const ListItemIconInner =
    (!!Icon && <Icon />) ||
    (isCollapsed && <IconSpacer className={classes.iconSpacer} />) ||
    ''

  const nestingOffsetChildren = !isCollapsed ? nestingOffset + 16 : 16

  const ListItemRoot = (
    <NavItemComponent
      link={link}
      className={clsx(
        classes.navItem,
        isCollapsed && classes.navItemCollapsed,
        hasChildrenAndIsActive && 'active',
        className,
      )}
      style={{
        fontSize: `${1 - 0.07 * nestingLevel}em`,
        paddingLeft: `${!ListItemIconInner ? nestingOffset + 40 : nestingOffset}px`,
      }}
      isCollapsed={isCollapsed}
      onClick={handleClick}
    >
      {!!ListItemIconInner && (
        <ListItemIcon
          style={IconStyles}
          className={clsx(classes.navItemIcon, IconClassName)}
        >
          {ListItemIconInner}
        </ListItemIcon>
      )}
      <ListItemText primary={name} disableTypography={true} />
      {hasChildren && !open && <IconExpandMore className={classes.iconToggle} />}
      {hasChildren && open && <IconExpandLess className={classes.iconToggle} />}
    </NavItemComponent>
  )

  const ListItemChildren = hasChildren ? (
    <div className={clsx(classes.navItemChildren)}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <Divider /> */}
        <List component="div" disablePadding>
          {items.map(item => (
            <NavItem
              {...item}
              isNested={true}
              nestingLevel={nestingLevel + 1}
              isCollapsed={isCollapsed}
              key={item.name || item.link}
              isOpen={open}
              nestingOffset={nestingOffsetChildren}
            />
          ))}
        </List>
      </Collapse>
    </div>
  ) : null

  return (
    <div
      className={clsx(
        hasChildrenAndIsActive && classes.navItemWrapperActive,
        hasChildrenAndIsActive && isCollapsed && classes.navItemWrapperActiveCollapsed,
      )}
    >
      {ListItemRoot}
      {ListItemChildren}
    </div>
  )
}

const NavItem = props => {
  if (props.isCollapsed) {
    return <NavItemCollapsed {...props} />
  } else {
    return <NavItemDefault {...props} />
  }
}

const useStyles = makeStyles(theme =>
  createStyles({
    // nested: {
    //   paddingLeft: theme.spacing(10),
    // },
    navItemWrapper: {
      position: 'relative',
    },
    navItemWrapperActive: {
      // background: 'rgba(0, 0, 0, 0.08)',
    },
    navItemWrapperActiveCollapsed: {
      background: 'rgba(0, 0, 0, 0.08)',
    },
    navItem: {
      position: 'relative',
      transition: 'background .23s ease',
      '&.active': {
        color: theme.palette.secondary.main,
        // background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          // color: '#fff',
          color: theme.palette.secondary.main,
        },
      },
    },
    navItemChildren: {
      transition: 'background .23s ease',
      // position: 'absolute',
    },
    navItemChildrenActive: {
      // background: 'rgba(0, 0, 0, 0.1)',
    },
    navItemCollapsed: {
      whiteSpace: 'nowrap',
      flexWrap: 'nowrap',
      width: theme.sidebar.widthCollapsed,
      '& $iconToggle': {
        position: 'absolute',
        // bottom: -1,
        fontSize: 14,
        top: '50%',
        marginTop: '-0.5em',
        transform: 'rotate(90deg)',
        right: '3px',
      },
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
      },
    },

    navItemIcon: {
      minWidth: 40,
    },
    iconToggle: {},
    iconSpacer: {
      fontSize: 13,
      marginLeft: 6,
    },
  }),
)

// ----------------------

// Flattened array of all children
function getItemsAll(items) {
  return items.reduce((allItems, item) => {
    // let res = allItems.concat([item])

    if (item.items && item.items.length) {
      return allItems.concat([item], getItemsAll(item.items))
    } else {
      return allItems.concat([item])
    }
  }, [])
}

export default NavItem
