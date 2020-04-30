import React from 'react'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'

import { makeStyles, TableBody, TableCell, TableRow, Avatar } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons/'

const UsersListTableItems = ({ users, rowsPerPage = 10, rowsExpected = 10 }) => {
  // const classes = useStyles()

  // Count how many empty rows needs to be filled
  const usersVisible = users.length || rowsExpected
  const usersArrayExpected = Array.from({ length: usersVisible }).map(
    (item, index) => index,
  )
  const emptyRows = rowsPerPage - usersVisible

  return (
    <>
      {!users.length &&
        usersArrayExpected.map(item => (
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
            <EditIcon />
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
}))

export default UsersListTableItems
