import React, { forwardRef, MouseEvent } from 'react'
import clsx from 'clsx'

import ListItem from '@material-ui/core/ListItem'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { NavLink, NavLinkProps } from 'react-router-dom'

export const NavItemLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
  <NavLink exact {...props} innerRef={ref} />
))

export interface INavItemComponent {
  link?: string
  className?: string
  isCollapsed?: boolean
  style?: any
  onClick(e: MouseEvent): void
}

// Can be a link, or button
export const NavItemComponent = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<INavItemComponent>
>((props, ref) => {
  const { isCollapsed, ...newProps } = props
  const classes = useStyles()

  const component =
    typeof props.link === 'string' ? (
      <ListItem {...newProps} component={NavItemLink} to={props.link} />
    ) : (
      <ListItem {...newProps} button />
    )

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
