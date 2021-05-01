import React, { forwardRef, MouseEvent } from 'react'
import clsx from 'clsx'

import ListItem from '@material-ui/core/ListItem'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { NavLink, NavLinkProps } from 'react-router-dom'

type NavItemComponentProps = {
  link?: string
  className?: string
  isCollapsed?: boolean
  style?: any
  onClick(e: MouseEvent): void
}

interface NavItemLinkInternalProps extends NavLinkProps {}

export const NavItemLinkInternal = forwardRef<
  HTMLAnchorElement,
  NavItemLinkInternalProps
>((props, ref) => {
  return <NavLink exact {...props} innerRef={ref} />
})

export const NavItemLinkExternal = forwardRef<HTMLAnchorElement, NavItemComponentProps>(
  (props, ref) => {
    return (
      <a {...props} href={props.link} ref={ref}>
        {props.children}
      </a>
    )
  },
)

// Can be a link, or button
export const NavItemComponent = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<NavItemComponentProps>
>((props, ref) => {
  const { isCollapsed, ...newProps } = props
  const classes = useStyles()

  const component = (() => {
    if (!props.link) {
      return <ListItem {...newProps} button />
    } else if (typeof props.link === 'string' && !props.link.includes('http')) {
      return <ListItem {...newProps} component={NavItemLinkInternal} to={props.link} />
    } else if (typeof props.link === 'string' && props.link.includes('http')) {
      return <ListItem {...newProps} component={NavItemLinkExternal} />
    }
  })()

  return (
    <div ref={ref} className={clsx(isCollapsed && classes.navItemCollapsedWrapper)}>
      {component}
    </div>
  )
})

const useStyles = makeStyles((theme) =>
  createStyles({
    navItemCollapsedWrapper: {
      width: theme.sidebar.widthCollapsed,
    },
  }),
)

export default NavItemComponent
