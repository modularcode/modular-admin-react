import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import IconCode from '@material-ui/icons/Code'
import IconFavorite from '@material-ui/icons/Favorite'
import IconStar from '@material-ui/icons/Star'

// const SupportLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
//   <Link innerRef={ref as any} {...props} />
// ))

const AppHeaderDemoButtons = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.demo}>
      <Tooltip title="View on GitHub">
        <Button
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          href="https://github.com/modularcode/modular-material-admin-react"
        >
          <IconCode className={classes.demoIcon} />
          <span className={classes.demoName}>View on GitHub</span>
        </Button>
      </Tooltip>
      <Tooltip title="Help me to keep the project active!">
        <Button
          component={Link}
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          to="/demo/supporters"
        >
          <IconFavorite className={classes.demoIcon} />
          <span className={classes.demoName}>Support Me</span>
        </Button>
      </Tooltip>
      <Tooltip title="Star the project on GitHub!">
        <Button
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          href="https://github.com/modularcode/modular-material-admin-react/stargazers"
        >
          <IconStar className={classes.demoIcon} />
          <span className={classes.demoName}>Rate</span>
        </Button>
      </Tooltip>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  demo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoIcon: {},
  demoName: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      margin: 3,
    },
  },
}))

export default AppHeaderDemoButtons
