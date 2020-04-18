import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles, Typography } from '@material-ui/core'
import BaseLogo from '../../../_common/BaseLogo'

const AuthHeader = ({ title = '' }) => {
  const classes = useStyles()

  return (
    <Typography component="h1" variant="h4">
      <BaseLogo size={30} className={classes.logo} /> {title}
    </Typography>
  )
}

AuthHeader.propTypes = {
  title: PropTypes.string,
}

const useStyles = makeStyles(theme => ({
  logo: {
    color: theme.palette.primary.main,
    position: 'relative',
    top: '1px',
  },
}))

export default AuthHeader
