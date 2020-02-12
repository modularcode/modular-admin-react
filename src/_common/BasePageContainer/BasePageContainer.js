import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const PageContainer = ({ children }) => {
  const classes = useStyles()

  return <article className={classes.container}>{children}</article>
}

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default PageContainer
