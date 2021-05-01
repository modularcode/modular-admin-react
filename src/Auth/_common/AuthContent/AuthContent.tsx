import React from 'react'
import { makeStyles } from '@material-ui/core'

export type AuthContentProps = {}

const AuthContent: React.FC<AuthContentProps> = (props) => {
  const classes = useStyles()

  return <div className={classes.paper}>{props.children}</div>
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default AuthContent
