import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import {
  makeStyles,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  TableFooter,
} from '@material-ui/core'

import api from '@/_api'

import BasePageContainer from '../../../_common/BasePageContainer'
import BasePageToolbar from '../../../_common/BasePageToolbar'
import { BaseTablePagination } from '../../../_common/BaseTable'

import UsersListTableBody from './UsersListTableBody'

const UsersList = ({ match }) => {
  const classes = useStyles()

  const [page, setPage] = React.useState(0)
  const [usersData, setUsersData] = useState({ users: [], count: 0 })
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  useEffect(() => {
    async function fetchUsers() {
      const userDataRes = await api.users.getList({
        limit: rowsPerPage,
        offset: page * rowsPerPage,
      })

      setUsersData(userDataRes)
    }

    fetchUsers()
  }, [page, rowsPerPage])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const { users, count } = usersData

  return (
    <BasePageContainer>
      <BasePageToolbar title={'Users Adminstration'}></BasePageToolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
              <UsersListTableBody users={users} count={count} rowsPerPage={rowsPerPage} />
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
