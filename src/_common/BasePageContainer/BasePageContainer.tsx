import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export type BasePageContainerProps = {}

const BasePageContainer: React.FC<BasePageContainerProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <main className={classes.container} role="main">
      {children}
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default BasePageContainer
