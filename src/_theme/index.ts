import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme'
import { createMuiTheme } from '@material-ui/core/styles'

// Allow configuration using `createMuiTheme`
// ref: https://material-ui.com/guides/typescript/
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    header: {
      background: string
    }
    sidebar: {
      width: number
      widthCollapsed: number
      background: string
      color: string
    }
  }
  interface ThemeOptions {}
}

export interface Theme extends MuiTheme {}

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
    primary: {
      main: '#8cd136', //indigo[600],
    },
    secondary: {
      main: '#ae59e3', //'#619f30',
    },
    text: {
      secondary: 'rgba(102, 102, 102, 0.83)',
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
