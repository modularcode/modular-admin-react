import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography } from '@material-ui/core'

const KeyNumbers = props => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          Subscriptions
          <Grid container spacing={0}>
            <Grid item xs={6} md={12} lg={6}>
              <Typography variant="body1" className={classes.value}>
                139 <sup className={clsx(classes.valueChange, classes.positive)}>+5%</sup>
              </Typography>
            </Grid>
            <Grid item xs={6} md={12} lg={6}>
              -
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          Monthly Revenue
          <Grid container spacing={0}>
            <Grid item xs={6} md={12} lg={6}>
              <Typography variant="body1" className={classes.value}>
                24350${' '}
                <sup className={clsx(classes.valueChange, classes.positive)}>+13%</sup>
              </Typography>
            </Grid>
            <Grid item xs={6} md={12} lg={6}>
              -
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          Monthly Churn
          <Grid container spacing={0}>
            <Grid item xs={6} md={12} lg={6}>
              <Typography variant="body1" className={classes.value}>
                13 <sup className={clsx(classes.valueChange, classes.negative)}>+10%</sup>
              </Typography>
            </Grid>
            <Grid item xs={6} md={12} lg={6}>
              -
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          Total Users
          <Grid container spacing={0}>
            <Grid item xs={6} md={12} lg={6}>
              <Typography variant="body1" className={classes.value}>
                48205{' '}
                <sup className={clsx(classes.valueChange, classes.positive)}>+30%</sup>
              </Typography>
            </Grid>
            <Grid item xs={6} md={12} lg={6}>
              -
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

KeyNumbers.propTypes = {}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  value: {
    fontWeight: 'bold',
  },
  valueChange: {},
  negative: {
    color: theme.palette.text.negative,
  },
  positive: {
    color: theme.palette.text.positive,
  },
}))

export default KeyNumbers
