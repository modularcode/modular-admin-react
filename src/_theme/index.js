import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const baseTheme = createMuiTheme({
  props: {
    MuiPaper: {
      elevation: 0,
    },
    MuiAppBar: {
      elevation: 1,
    },
    MuiButton: {
      // elevation: 0,
    },
    MuiMenu: {
      elevation: 1,
    },
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        minWidth: 0,
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgb(118, 195, 21)',
        },
      },
    },
    MuiButtonGroup: {
      root: {
        boxShadow: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 40,
      },
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 16,
        },
      },
    },
    MuiLinearProgress: {
      root: {
        background: '#f3f3f3 !important',
      },
    },
  },
  palette: {
    divider: 'rgba(30, 30, 30, 0.06)',
    secondary: {
      main: '#8cd136', //indigo[600],
    },
    primary: {
      main: '#ae59e3', //'#619f30',
      // main: '#9027d1', //'#619f30',
      // main: blue[600], //'#619f30',
    },
    text: {
      secondary: 'rgba(102, 102, 102, 0.83)',
      positive: '#8cd136',
      negative: '#e35959',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.4rem',
    },
    h5: {
      fontSize: '1.2rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
})

const adminTheme = {
  header: {
    background: '#fff',
  },
  sidebar: {
    width: 255,
    widthCollapsed: baseTheme.spacing(7),
    background: '#4a4d5a;',
    color: '#fff',
  },
}

const theme = {
  ...baseTheme,
  ...adminTheme,
}

export default theme
