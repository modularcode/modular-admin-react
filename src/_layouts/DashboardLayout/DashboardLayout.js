import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useComponentSize from '@rehooks/component-size'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

import AppHeader from '../../_common/AppHeader'
import AppFooter from '../../_common/AppFooter'
import AppSidebar from '../../_common/AppSidebar'

export default function DashboardLayout(
  { header, footer, sidebar, content, children } = {
    header: AppHeader,
    footer: AppFooter,
    sidebar: AppSidebar,
  },
) {
  const refHeaderContainer = useRef(null)
  const refSidebarContainer = useRef(null)
  const refFooterContainer = useRef(null)

  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = !isDesktop

  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false)
  // const [isSidebarOpenDesktop, setIsSidebarOpenDesktop] = useState(false)
  const [isSidebarCollapsedDesktop, setIsSidebarCollapsedDesktop] = useState(false)

  const headerSize = useComponentSize(refHeaderContainer)
  const sidebarSize = useComponentSize(refSidebarContainer)
  // const footerSize = useComponentSize(refFooterContainer)

  const HeaderComponent = header
  const SidebarComponent = sidebar
  const FooterComponent = footer

  function handleSidebarMobileToggle() {
    setIsSidebarOpenMobile(!isSidebarOpenMobile)
  }

  // function handleSidebarToggle() {
  //   // Open/close on mobile
  //   if (isMobile) {
  //     setIsSidebarOpenMobile(!isSidebarOpenMobile)
  //   }
  //   // Collapse/uncollapse on desktop
  //   else {
  //     setIsSidebarCollapsedDesktop(!isSidebarCollapsedDesktop)
  //   }
  // }

  // function handleSidebarToggleCollapse() {
  //   setIsSidebarCollapsedDesktop(!setIsSidebarCollapsedDesktop)
  // }

  return (
    <div className={classes.dashboardContainer}>
      <div
        ref={refHeaderContainer}
        className={clsx(
          classes.headerContainer,
          isDesktop && classes.headerContainerDesktop,
          isDesktop &&
            isSidebarCollapsedDesktop &&
            classes.headerContainerDesktopDrawerCollapsed,
        )}
        style={{
          width: `calc(100% - ${sidebarSize.width}px)`,
        }}
      >
        {HeaderComponent && <HeaderComponent />}
      </div>
      <div
        ref={refSidebarContainer}
        className={clsx(
          classes.sidebarContainer,
          isMobile && classes.sidebarContainerMobile,
          isDesktop && isSidebarCollapsedDesktop && classes.sidebarContainerCollapsed,
        )}
      >
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isSidebarOpenMobile}
            onClose={handleSidebarMobileToggle}
            classes={{
              paper: clsx(classes.drawer), //  classes.drawerMobile
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {SidebarComponent && <SidebarComponent />}
            {/* <Sidebar
              isDesktop={isDesktop}
              isMobile={isMobile}
              isSidebarCollapsedDesktop={isSidebarCollapsedDesktop}
              isSidebarOpenMobile={isSidebarOpenMobile}
            /> */}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: clsx(classes.drawer),
            }}
            variant="permanent"
          >
            {SidebarComponent && <SidebarComponent />}
            {/* {sidebar} */}
            {/* <Sidebar
              isDesktop={isDesktop}
              isMobile={isMobile}
              isSidebarCollapsedDesktop={isSidebarCollapsedDesktop}
              isSidebarOpenMobile={isSidebarOpenMobile}
            /> */}
          </Drawer>
        </Hidden>
      </div>
      <main
        className={classes.mainContainer}
        style={{
          paddingTop: headerSize.height,
        }}
      >
        <div className={classes.contentContainer}>{children}</div>
        <div className={classes.footerContainer}>
          {FooterComponent && <FooterComponent />}
        </div>
      </main>
    </div>
  )
}

DashboardLayout.props = {
  header: PropTypes.elementType,
  sidebar: PropTypes.elementType,
  footer: PropTypes.elementType,
}

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    display: 'flex',
    background: '#f5f5f5',
  },
  headerContainer: {
    top: 0,
    left: 'auto',
    right: 0,
    display: 'flex',
    alignItems: 'stretch',
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sidebarContainer: {
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    [theme.breakpoints.up('md')]: {
      width: theme.sidebar.width,
      flexShrink: 0,
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sidebarContainerMobile: {
    width: 0,
  },
  sidebarContainerCollapsed: {
    width: theme.sidebar.widthCollapsed,
  },
  drawer: {
    width: '100%',
    position: 'absolute',
  },
  mainContainer: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
  },
  contentContainer: {
    display: 'flex',
    position: 'relative',
    flex: 1,
  },
  footerContainer: {
    position: 'relative',
  },
}))
