import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import IconCode from '@material-ui/icons/Code'
import IconStar from '@material-ui/icons/Star'
import IconDownload from '@material-ui/icons/GetApp'

const AppHeaderDemoButtons = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.demo}>
      <Tooltip title="View code on the GitHub">
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
      <Tooltip title="View all releases">
        <Button
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          href="https://github.com/modularcode/modular-material-admin-react/releases"
        >
          <IconDownload className={classes.demoIcon} />
          <span className={classes.demoName}>Download</span>
        </Button>
      </Tooltip>
      <Tooltip title="Star the project on the GitHub!">
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
