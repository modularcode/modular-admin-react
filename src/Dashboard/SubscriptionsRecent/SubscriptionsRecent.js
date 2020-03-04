import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
} from '@material-ui/core'
import { Notes as IconNotes, MoreVert as IconMoreVert } from '@material-ui/icons'

import { customersByIntegrations } from './data'

const Subscriptions = props => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={<IconNotes className={classes.headerIcon} />}
          action={
            <IconButton aria-label="settings" size="small">
              <IconMoreVert />
            </IconButton>
          }
          title="Recent Subscriptions"
        />
        <CardContent className={classes.cardContent}>
          <Box className={classes.ratingBox}>
            {customersByIntegrations.map(({ name, ratio, value }) => (
              <div key={name}>
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
          </Box>
          <Box padding={2} justifyContent="center">
            View All
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

Subscriptions.propTypes = {}

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

export default Subscriptions
