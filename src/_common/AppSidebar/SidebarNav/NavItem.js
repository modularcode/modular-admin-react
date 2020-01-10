import React, { useLayoutEffect } from 'react'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Popover from '@material-ui/core/Popover'
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

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = event => {
    if (!hasChildren) {
      return false
    }

    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'sidebar-nav-item-popper' : undefined

  const ListItemIconInner =
    (!!Icon && <Icon />) ||
    (isCollapsed && <IconSpacer className={classes.iconSpacer} />) ||
    ''

  const ListItemRoot = (
    <Tooltip
      disableFocusListener={true}
      disableHoverListener={false}
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
          open && 'open',
          className,
        )}
        isCollapsed={true}
        aria-describedby={id}
        onClick={handlePopoverOpen}
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
        {hasChildren && (
          <IconExpandLess
            className={clsx(classes.iconToggle, !open && classes.iconToggleInactive)}
          />
        )}
      </NavItemComponent>
    </Tooltip>
  )

  const ListItemChildren = hasChildren ? (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={handlePopoverClose}
      classes={{
        paper: classes.navItemPoper,
      }}
    >
      <div className={clsx(classes.navItemChildren)}>
        <List component="div" disablePadding>
          {items.map(item => (
            <NavItem
              {...item}
              isNested={true}
              nestingLevel={0}
              isCollapsed={false}
              key={item.name || item.link}
              isOpen={open}
              onClick={!item.items || !item.items.length ? handlePopoverClose : undefined}
            />
          ))}
        </List>
      </div>
    </Popover>
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
    onClick = () => {},
  } = props
  const classes = useStyles()
  const hasChildren = items && items.length > 0

  const itemsAll = getItemsAll(items)
  const hasChildrenAndIsActive =
    hasChildren &&
    itemsAll.filter(item => `#${item.link}` === window.location.hash).length > 0
  const isOpen = hasChildrenAndIsActive || false
  const [open, setOpen] = React.useState(isOpen)

  // This is a work around for fixing the collapsed item poper overflow bug
  useLayoutEffect(() => {
    window.dispatchEvent(new CustomEvent('resize'))
  })

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
      onClick={onClick}
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
      '&.active:not(.open)': {
        color: theme.palette.secondary.main,
        // background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          // color: '#fff',
          color: theme.palette.secondary.main,
        },
      },
      '&.open': {
        color: '#fff',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    navItemPoper: {
      width: theme.sidebar.width,
      color: theme.sidebar.color,
      background: theme.sidebar.background,
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
    iconToggleInactive: {
      opacity: 0.35,
    },
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
