import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  ButtonGroup,
  Button,
  Grid,
  Paper,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
} from '@material-ui/core'
import { Timeline as IconTimeline, MoreVert as IconMoreVert } from '@material-ui/icons'

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
            <div>
              <Typography>GitHub.com</Typography>
              <LinearProgress variant="determinate" value={55} color="primary" />
            </div>
            <div>
              <Typography>MaterialUI.com</Typography>
              <LinearProgress variant="determinate" value={25} color="primary" />
            </div>
            <div>
              <Typography>Google</Typography>
              <LinearProgress variant="determinate" value={15} color="primary" />
            </div>
            <div>
              <Typography>ModularCode.io</Typography>
              <LinearProgress variant="determinate" value={8} color="primary" />
            </div>
            <div>
              <Typography>TypeScript</Typography>
              <LinearProgress variant="determinate" value={5} color="primary" />
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Subscriptions.propTypes = {}

const useStyles = makeStyles(theme => ({
  cardHeader: {
    borderBottom: '1px solid rgba(24,28,33,0.06)',
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
    borderRight: '1px solid rgba(24,28,33,0.06)',
  },
  chart: {
    width: '100%',
    paddingBottom: '30%',
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
}))

export default Subscriptions
