import React from 'react'
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer'

export default function Dashboard({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = !isDesktop

  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = React.useState(false)
  const [isSidebarCollapsedDesktop, setIsSidebarCollapsedDesktop] = React.useState(false)

  function handleSidebarMobileToggle() {
    setIsSidebarOpenMobile(!isSidebarOpenMobile)
  }

  function handleSidebarToggle() {
    // Open/close on mobile
    if (isMobile) {
      setIsSidebarOpenMobile(!isSidebarOpenMobile)
    }
    // Collapse/uncollapse on desktop
    else {
      setIsSidebarCollapsedDesktop(!isSidebarCollapsedDesktop)
    }
  }

  return (
    <div className={classes.dashboardContainer}>
      <div
        className={clsx(
          classes.headerContainer,
          isDesktop && classes.headerContainerDesktop,
          isDesktop &&
            isSidebarCollapsedDesktop &&
            classes.headerContainerDesktopDrawerCollapsed,
        )}
      >
        <Header onToggle={handleSidebarToggle} />
      </div>
      <div
        className={clsx(
          classes.sidebarContainer,
          isMobile && classes.sidebarContainerMobile,
          isDesktop && classes.sidebarContainerDesktop,
          isDesktop &&
            isSidebarCollapsedDesktop &&
            classes.sidebarContainerDesktopDrawerCollapsed,
        )}
      >
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isSidebarOpenMobile}
            onClose={handleSidebarMobileToggle}
            classes={{
              paper: clsx(classes.drawer, classes.drawerMobile),
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
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
              paper: clsx(
                classes.drawer,
                classes.drawerDesktop,
                isSidebarCollapsedDesktop && classes.drawerDesktopCollapsed,
              ),
            }}
            variant="permanent"
          >
            {/* <Sidebar
              isDesktop={isDesktop}
              isMobile={isMobile}
              isSidebarCollapsedDesktop={isSidebarCollapsedDesktop}
              isSidebarOpenMobile={isSidebarOpenMobile}
            /> */}
          </Drawer>
        </Hidden>
      </div>
      <main className={classes.content}>
        <div className={classes.headerSpacer} />
        {children}
        <Footer />
      </main>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    display: 'flex',
    background: '#f5f5f5',
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  headerContainerDesktop: {
    left: 'auto',
    width: `calc(100% - ${theme.sidebar.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  headerContainerDesktopDrawerCollapsed: {
    width: `calc(100% - ${theme.sidebar.widthCollapsed}px)`,
  },
  sidebarContainer: {
    position: 'relative',
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
  sidebarContainerDesktop: {
    width: theme.sidebar.width,
  },
  sidebarContainerDesktopDrawerCollapsed: {
    [theme.breakpoints.up('md')]: {
      width: theme.sidebar.widthCollapsed,
    },
  },
  drawer: {},
  drawerMobile: {
    width: theme.sidebar.width,
  },
  drawerDesktop: {
    width: '100%',
    position: 'absolute',
  },
  drawerDesktopCollapsed: {
    overflowX: 'hidden',
  },
  headerSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))
