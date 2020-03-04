import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

import AppHeader from '../../_common/AppHeader'
import AppFooter from '../../_common/AppFooter'
import AppSidebar from '../../_common/AppSidebar'

const DashboardLayout = (
  { header, footer, sidebar, children } = {
    header: AppHeader,
    footer: AppFooter,
    sidebar: AppSidebar,
  },
) => {
  const refHeaderContainer = useRef(null)

  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = !isDesktop

  const [headerHeight, setHeaderHeight] = useState(0)
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false)
  const [isSidebarOpenDesktop, setIsSidebarOpenDesktop] = useState(true)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    // code to run on component mount
    setHeaderHeight(refHeaderContainer.current.offsetHeight)
  }, [])

  const contentOffset = (() => {
    if ((isDesktop && !isSidebarOpenDesktop) || isMobile) {
      return 0
    } else if (isDesktop && isSidebarCollapsed) {
      return theme.sidebar.widthCollapsed
    } else {
      return theme.sidebar.width
    }
  })()

  const HeaderComponent = header
  const SidebarComponent = sidebar
  const FooterComponent = footer

  function handleSidebarToggleOpenMobile() {
    setIsSidebarOpenMobile(!isSidebarOpenMobile)
  }

  function handleSidebarToggle() {
    // Open/close on mobile
    if (isMobile) {
      setIsSidebarOpenMobile(!isSidebarOpenMobile)
    }
    // Collapse/uncollapse on desktop
    else {
      setIsSidebarCollapsed(!isSidebarCollapsed)
    }
  }

  function handleSidebarToggleCollapse() {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className={classes.dashboardContainer}>
      <div
        ref={refHeaderContainer}
        className={clsx(classes.headerContainer)}
        style={{
          width: `calc(100% - ${contentOffset}px)`,
        }}
      >
        {HeaderComponent && <HeaderComponent onToggleClick={handleSidebarToggle} />}
      </div>
      <div
        // ref={refSidebarContainer}
        className={clsx(
          classes.sidebarContainer,
          isMobile && classes.sidebarContainerMobile,
          isDesktop && isSidebarCollapsed && classes.sidebarContainerCollapsed,
        )}
      >
        {/* Mobile sidebar */}
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            open={isSidebarOpenMobile}
            onClose={handleSidebarToggleOpenMobile}
            classes={{
              paper: clsx(classes.drawer), //  classes.drawerMobile
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {SidebarComponent && <SidebarComponent />}
          </Drawer>
        </Hidden>
        {/* Desktop sidebar */}
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: clsx(classes.drawer),
            }}
            variant="permanent"
          >
            {SidebarComponent && <SidebarComponent isCollapsed={isSidebarCollapsed} />}
          </Drawer>
        </Hidden>
      </div>
      <main
        className={classes.mainContainer}
        style={{
          paddingTop: headerHeight, // || headerSize.height,
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

DashboardLayout.defaultProps = {
  header: AppHeader,
  sidebar: AppSidebar,
  footer: AppFooter,
}

DashboardLayout.propTypes = {
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
    width: theme.sidebar.width,
    flexShrink: 0,
    // [theme.breakpoints.up('md')]: {
    //   width: theme.sidebar.width,
    //   flexShrink: 0,
    // },
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
    [theme.breakpoints.down('sm')]: {
      width: theme.sidebar.width,
      flexShrink: 0,
    },
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

export default DashboardLayout
