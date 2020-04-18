import React from 'react'
import { Route, Redirect } from 'react-router-dom' //
import { makeStyles } from '@material-ui/core/styles'

import { Grid, Typography, Link, Box, Hidden } from '@material-ui/core/'
import { Link as RouterLink } from 'react-router-dom'

import Login from './Login'
import Signup from './Signup'
import Recover from './Recover'
import Reset from './Reset'

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" component={RouterLink} to="/">
        Go back to dashboard
      </Link>
    </Typography>
  )
}

export default function Auth({ match }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={12} md={4} className={classes.formSection}>
        <Box p={2}>
          <Redirect exact from={`${match.path}/`} to={`${match.path}/login`} />
          <Route path={`${match.path}/login`} component={Login} />
          <Route path={`${match.path}/signup`} component={Signup} />
          <Route path={`${match.path}/recover`} component={Recover} />
          <Route path={`${match.path}/reset`} component={Reset} />
          <Box mt={8}>
            <Footer />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} className={classes.introSection}></Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
  },
  formSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/background-auth.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))
