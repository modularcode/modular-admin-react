import React from 'react'
// import PropTypes from 'prop-types'
import {
  makeStyles,
  Box,
  Grid,
  Card,
  Button,
  CardHeader,
  CardActions,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { Notes as IconNotes, MoreVert as IconMoreVert } from '@material-ui/icons'
import { FormattedDate } from 'react-intl'

import { recentSubscriptions } from './data'

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
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Organization</TableCell>
                <TableCell align="right">Users</TableCell>
                <TableCell align="right">Plan</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentSubscriptions.map(subscription => (
                <TableRow key={subscription.organization}>
                  <TableCell component="th" scope="row">
                    {subscription.organization}
                  </TableCell>
                  <TableCell align="right">{subscription.numUsers}</TableCell>
                  <TableCell align="right">{subscription.plan}</TableCell>
                  <TableCell align="right">
                    <FormattedDate
                      value={subscription.created}
                      month="long"
                      day="2-digit"
                      hour="numeric"
                      minute="numeric"
                    ></FormattedDate>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CardActions>
          <Button size="small" color="primary">
            View All
          </Button>
        </CardActions>
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
}))

export default Subscriptions
