import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
} from '@material-ui/core'
import { Timeline as IconTimeline, MoreVert as IconMoreVert } from '@material-ui/icons'

const subscriptionsItems = [
  { name: 'GitHub', ratio: 55.3, value: Math.round(55.3 * 144) },
  { name: 'MaterialUI', ratio: 25.7, value: Math.round(25.7 * 144) },
  { name: 'Google', ratio: 15.6, value: Math.round(15.6 * 144) },
  { name: 'ModularCode', ratio: 8.4, value: Math.round(8.4 * 144) },
  { name: 'GH', ratio: 5.5, value: Math.round(5.5 * 144) },
]

const Subscriptions = props => {
  const classes = useStyles()

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={<IconTimeline className={classes.headerIcon} />}
        action={
          <IconButton aria-label="settings" size="small">
            <IconMoreVert />
          </IconButton>
        }
        title="Subscriptions"
      />
      <CardContent className={classes.cardContent}>
        <Grid container spacing={4}>
          <Grid item sm={9} className={classes.chartBox}>
            <div className={classes.chart}></div>
          </Grid>
          <Grid item sm={3} className={classes.ratingBox}>
            {subscriptionsItems.map(({ name, ratio, value }) => (
              <div>
                <Grid container>
                  <Grid item xs>
                    <Typography variant="body1">{name}</Typography>
                  </Grid>
                  <Grid item xs className={classes.ratingItemValueBox}>
                    <Typography
                      align="right"
                      variant="body2"
                      display="inline"
                      className={classes.ratingItemValue}
                    >
                      {value}
                    </Typography>
                    <Typography
                      align="left"
                      variant="body2"
                      color="textSecondary"
                      className={classes.ratingItemRatio}
                    >
                      {ratio}%
                    </Typography>
                  </Grid>
                </Grid>
                <LinearProgress variant="determinate" value={ratio} color="primary" />
              </div>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Subscriptions.propTypes = {}

const useStyles = makeStyles(theme => ({
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
  chart: {
    width: '100%',
    paddingBottom: '25%',
    background: '#efefef',
  },
  cardContent: {
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

export default Subscriptions
