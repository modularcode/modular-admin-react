import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import {
  makeStyles,
  Paper,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
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

  // Request users
  useEffect(() => {
    async function fetchUsers() {
      setStatus('loading')

      try {
        const userDataRes = await api.users.getList({
          limit: rowsPerPage,
          offset: page * rowsPerPage,
        })

        // Make some artificial delay
        await new Promise(resolve => {
          setTimeout(() => resolve(true), 1000)
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
  }, [page, rowsPerPage, usersData.count])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const { users, count } = usersData
  const rowsExpected = count ? Math.max(count - rowsPerPage * page, 0) : rowsPerPage

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
                    <TableCell>Avatar</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
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
