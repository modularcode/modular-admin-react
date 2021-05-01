import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import pkg from '../../../package.json'

type AppFooterProps = {}

const AppFooter: React.FC<AppFooterProps> = () => {
  console.log('AppFooter rendered')

  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="left">
        {`Modular Admin React`}{' '}
        <Link
          color="secondary"
          href="https://github.com/modularcode/modular-admin-react/releases"
        >
          v{pkg.version}
        </Link>
        {' | '}
        <Link
          color="secondary"
          href="https://github.com/modularcode/modular-admin-react/blob/master/LICENSE"
        >
          MIT License
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="secondary" href="https://github.com/modularcoder">
          GitHub
        </Link>
        {' | '}
        <Link color="secondary" href="https://www.linkedin.com/in/modularcoder/">
          LinkedIn
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="right">
        {'Built with '}
        <Link color="secondary" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' by '}
        <Link color="secondary" href="https://twitter.com/modularcoder">
          Gevorg Harutyunyan
        </Link>
      </Typography>
    </footer>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    background: '#fff',
    padding: '0.5rem 1rem',
    justifyContent: 'space-between',
  },
}))

export default memo(AppFooter)
