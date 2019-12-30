import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="left">
        {'Find me on: '}
        <Link color="primary" href="https://github.com/modularcoder">
          GitHub
        </Link>
        {' | '}
        <Link color="primary" href="https://twitter.com/modularcoder">
          Twitter
        </Link>
        {' | '}
        <Link color="primary" href="https://www.linkedin.com/in/modularcoder/">
          LinkedIn
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="right">
        {'Built with '}
        <Link color="primary" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' by '}
        <Link color="primary" href="https://twitter.com/modularcoder">
          Gevorg Harutyunyan
        </Link>
      </Typography>
    </footer>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    background: '#fff',
    padding: '0.5rem 1rem',
    justifyContent: 'space-between',
  },
}))

export default Footer
