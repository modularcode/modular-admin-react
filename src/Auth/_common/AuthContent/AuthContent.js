import React from 'react'
import { makeStyles } from '@material-ui/core'

const AuthContent = (props) => {
  const classes = useStyles()

  return <div className={classes.paper}>{props.children}</div>
}

AuthContent.propTypes = {}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default AuthContent
