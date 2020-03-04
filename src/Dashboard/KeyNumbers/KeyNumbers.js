import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Box, Grid, Typography } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

import { generateTrendChartData } from './data'

const numbers = [
  {
    name: 'Monthly Revenue',
    value: '24350$',
    change: '+13%',
    trend: 'positive',
    chart: generateTrendChartData({
      name: 'Monthly Revenue',
      from: Math.round(24350 / 1.13),
      to: 24350,
      length: 15,
    }),
  },
  {
    name: 'Total Users',
    value: 48205,
    change: '+10%',
    trend: 'positive',
    chart: generateTrendChartData({
      name: 'Total Users',
      from: Math.round(48205 / 1.1),
      to: 48205,
    }),
  },
  {
    name: 'Subscriptions',
    value: 139,
    change: '-5%',
    trend: 'negative',
    chart: generateTrendChartData({
      name: 'Subscriptions',
      from: 139,
      to: Math.round(139 / 1.05),
      length: 15,
    }),
  },
  {
    name: 'Monthly Churn',
    value: 13,
    change: '-10%',
    trend: 'positive',
    chart: generateTrendChartData({
      name: 'Monthly Churn',
      from: 13,
      to: Math.random(13 / 1.1),
      length: 15,
    }),
  },
]

const KeyNumbers = props => {
  const classes = useStyles()

  return (
    <>
      {numbers.map(({ name, value, change, trend, chart }) => (
        <Grid item xs={12} sm={6} md={3} key={name}>
          <Paper className={classes.paper}>
            <Grid container spacing={0}>
              <Grid item xs={6} sm={6} md={12} lg={6}>
                <Box p={2}>
                  <Typography variant="body2" className={classes.name}>
                    {name}
                  </Typography>
                  <Typography variant="body1" className={classes.value}>
                    {value}{' '}
                    <sup
                      className={clsx(
                        classes.valueChange,
                        trend === 'positive' && classes.positive,
                        trend === 'negative' && classes.negative,
                      )}
                    >
                      {change}
                    </sup>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={12} lg={6}>
                <Box height="100%" position="relative" minHeight={70}>
                  <div className={classes.chartContainer}>
                    <Line data={chart.data} options={chart.options} />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  )
}

KeyNumbers.propTypes = {}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  value: {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  valueChange: {},
  negative: {
    color: theme.palette.text.negative,
  },
  positive: {
    color: theme.palette.text.positive,
  },
  chartContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
}))

export default KeyNumbers
