import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import BaseLogo from '_common/BaseLogo'

export type AuthHeaderProps = {
  title: string
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title = '' }) => {
  const classes = useStyles()

  return (
    <Typography component="h1" variant="h4">
      <BaseLogo size={30} className={classes.logo} /> {title}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.secondary.main,
    position: 'relative',
    top: '1px',
  },
}))

export default AuthHeader
