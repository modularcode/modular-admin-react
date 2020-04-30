import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import {
  makeStyles,
  Paper,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
  TableContainer,
  TableSortLabel,
} from '@material-ui/core'

import { Alert, AlertTitle } from '@material-ui/lab'

import api from '@/_api'

import BasePageContainer from '@/_common/BasePageContainer'
import BasePageToolbar from '@/_common/BasePageToolbar'
import { BaseTablePagination } from '@/_common/BaseTable'

import UsersListTableItems from './UsersListTableItems'

const UsersList = ({ match }) => {
  const classes = useStyles()

  const [status, setStatus] = React.useState('idle')
  const [statusMessage, setStatusMessage] = React.useState('')
  const [page, setPage] = React.useState(0)
  const [usersData, setUsersData] = useState({ users: [], count: 0 })
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [order, setOrder] = React.useState({
    order: 'desc',
    orderBy: 'createdAt',
  })

  const { users, count } = usersData
  const rowsExpected = count ? Math.max(count - rowsPerPage * page, 0) : rowsPerPage

  const tableColumns = [
    {
      id: 'avatarUrl',
      label: '',
      isSortable: false,
    },
    {
      id: 'firstName',
      label: 'First Name',
      isSortable: true,
    },
    {
      id: 'lastName',
      label: 'Last Name',
      isSortable: true,
    },
    {
      id: 'username',
      label: 'Username',
      isSortable: true,
    },
    {
      id: 'email',
      label: 'Email',
      isSortable: true,
    },
    {
      id: 'createdAt',
      label: 'Created',
      isSortable: true,
    },
  ]

  // Request users
  useEffect(() => {
    async function fetchUsers() {
      setStatus('loading')

      try {
        const userDataRes = await api.users.getList({
          limit: rowsPerPage,
          offset: page * rowsPerPage,
          order,
        })

        // Make some artificial delay
        await new Promise(resolve => {
          setTimeout(() => resolve(true), 300)
        })

        setStatus('idle')
        setUsersData(userDataRes)
      } catch (err) {
        console.log('error', err.message)

        setStatus('error')
        setStatusMessage(err.message)
      }
    }

    fetchUsers()
  }, [order, page, rowsPerPage, usersData.count])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handelChangeOrder = (event, columnId) => {
    setOrder({
      // If the sorting column has changed
      order: columnId !== order.orderBy || order.order === 'desc' ? 'asc' : 'desc',
      orderBy: columnId,
    })
  }

  return (
    <BasePageContainer>
      <BasePageToolbar title={'Users Adminstration'}></BasePageToolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {status === 'error' && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {statusMessage}
            </Alert>
          )}

          {status !== 'error' && (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    {tableColumns.map(column => (
                      <TableCell key={column.id}>
                        {/* Sortable */}
                        {column.isSortable && (
                          <TableSortLabel
                            active={order.orderBy === column.id}
                            direction={order.orderBy === column.id ? order.order : 'asc'}
                            onClick={event => handelChangeOrder(event, column.id)}
                          >
                            {column.label}
                          </TableSortLabel>
                        )}
                        {/* Non-sortable */}
                        {!column.isSortable && column.label}
                      </TableCell>
                    ))}
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <UsersListTableItems
                    users={status === 'loading' ? [] : users}
                    rowsPerPage={rowsPerPage}
                    rowsExpected={rowsExpected}
                  />
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <BaseTablePagination
                      page={page}
                      rowsPerPage={rowsPerPage}
                      count={count}
                      order={order}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </BasePageContainer>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

UsersList.propTypes = {}

export default UsersList
