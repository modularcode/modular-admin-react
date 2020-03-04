import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from '@material-ui/core'
import { BarChart as IconBarChart, MoreVert as IconMoreVert } from '@material-ui/icons'
import { Bar } from 'react-chartjs-2'

import { chart } from './data'

const SubscriptionsBreakdown = props => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={12} md={6} className={classes.card}>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          avatar={<IconBarChart className={classes.headerIcon} />}
          action={
            <IconButton aria-label="settings" size="small">
              <IconMoreVert />
            </IconButton>
          }
          title="Subscriptions Breakdown"
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.chartContainer}>
            <div className={classes.chart}>
              <Bar data={chart.data} options={chart.options} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

SubscriptionsBreakdown.propTypes = {}

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
  },
  cardHeader: {
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
  },
  cardBody: {
    overflow: 'hidden',
  },
  headerTitleBox: {},
  headerActionsBox: {
    textAlign: 'right',
  },
  headerIcon: {
    color: theme.palette.primary.main,
    verticalAlign: 'sub',
    marginRight: '.3em',
  },
  chartBox: {
    borderRight: '1px solid',
    borderRightColor: theme.palette.divider,
  },
  chartContainer: {
    width: '100%',
    position: 'relative',
    paddingBottom: '25%',
    minHeight: 240,
  },
  chart: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  cardContent: {
    height: '100%',
    '&:last-child': {
      paddingBottom: 'default',
    },
  },
  ratingBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ratingItemValueBox: {
    textAlign: 'right',
    fontSize: '0.7em',
  },
  ratingItemValue: {
    display: 'inline-block',
  },
  ratingItemRatio: {
    marginLeft: 4,
    display: 'inline-block',
    width: '3em',
    // fontSize: '1em',
  },
}))

export default SubscriptionsBreakdown
