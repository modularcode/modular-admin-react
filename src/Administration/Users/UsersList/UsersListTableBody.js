import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles, TableBody, TableCell, TableRow, Avatar } from '@material-ui/core'

import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons/'

const UsersListTableBody = ({ users, page, rowsPerPage = 10, Pagination }) => {
  const classes = useStyles()

  // Count how many empty rows needs to be filled
  const emptyRows = rowsPerPage - users.length

  return (
    <TableBody>
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
    </TableBody>
  )
}

UsersListTableBody.propTypes = {}

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

export default UsersListTableBody
