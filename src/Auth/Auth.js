import React from 'react'
import { Route } from 'react-router-dom' //
// import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'

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
  // const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/signup`} component={Signup} />
      <Route path={`${match.path}/recover`} component={Recover} />
      <Route path={`${match.path}/reset`} component={Reset} />
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  )
}

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }))
