import React from 'react'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'
import { Link } from 'react-router-dom'
import { makeStyles, TableCell, TableRow, Avatar } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons/'

const UsersListTableItems = ({ users, rowsPerPage = 10, rowsExpected = 10 }) => {
  const classes = useStyles()
  const UsersListTableItems = ({ users, rowsPerPage = 10 }) => {
  // Count how many empty rows needs to be filled
  const usersLoading = users.length
    ? []
    : Array.from({ length: rowsPerPage }).map((item, index) => index)
  const emptyRows = users.length ? rowsPerPage - users.length : []

  return (
    <>
      {usersLoading.map(item => (
        <TableRow key={item}>
          <TableCell>
            <Skeleton variant="circle" width={40} height={40} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" />
          </TableCell>
        </TableRow>
      ))}
      {users.map(row => (
        <TableRow key={row.id}>
          <TableCell>
            <Avatar alt={row.firstName} src={row.avatarUrl} />
          </TableCell>
          <TableCell component="th" scope="row">
            {row.firstName}
          </TableCell>
          <TableCell>{row.lastName}</TableCell>
          <TableCell>{row.username}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>
            <FormattedDate
              value={new Date(row.createdAt)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </TableCell>
          <TableCell>
            <Link to={{ pathname: `users/${row.id}/edit` }} className={classes.link}>
              <EditIcon />
            </Link>
            <DeleteIcon />
          </TableCell>
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  )
}

UsersListTableItems.propTypes = {}

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  link: {
    color: 'inherit'
  }
}))

export default UsersListTableItems
