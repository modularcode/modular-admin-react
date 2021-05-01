import React, { useEffect, useState } from 'react'
import { match as Match } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import {
  // makeStyles,
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

import { User } from '_api/_types/User'
import api from '_api'

import BasePageContainer from '_common/BasePageContainer'
import BasePageToolbar from '_common/BasePageToolbar'
import { BaseTablePagination } from '_common/BaseTable'

import UsersListAction from './UsersListActions'
import UsersListTableItems from './UsersListTableItems'

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
    id: 'status',
    label: 'Status',
    isSortable: true,
  },
  {
    id: 'createdAt',
    label: 'Created',
    isSortable: true,
  },
]

type UsersListRouteParams = {}

export type UsersListProps = {
  match: Match<UsersListRouteParams>
}

type UsersData = {
  users: User[]
  count: number
}

const UsersList: React.FC<UsersListProps> = () => {
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [page, setPage] = useState(0)
  const [usersData, setUsersData] = useState<UsersData>({ users: [], count: 0 })
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [order, setOrder] = useState({
    order: 'desc',
    orderBy: 'createdAt',
  })

  const { users, count } = usersData

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

        setStatus('idle')
        setUsersData(userDataRes)
      } catch (err) {
        console.log('error', err.message)

        setStatus('error')
        setStatusMessage(err.message)
      }
    }

    fetchUsers()
  }, [order, page, rowsPerPage])

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handelChangeOrder = (
    event: React.MouseEvent<HTMLSpanElement>,
    columnId: string,
  ) => {
    setOrder({
      // If the sorting column has changed
      order: columnId !== order.orderBy || order.order === 'desc' ? 'asc' : 'desc',
      orderBy: columnId,
    })
  }

  return (
    <BasePageContainer>
      <BasePageToolbar
        title={'Users Adminstration'}
        ActionsComponent={UsersListAction}
      ></BasePageToolbar>
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
              <Table aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    {tableColumns.map((column) => (
                      <TableCell key={column.id}>
                        {/* Sortable */}
                        {column.isSortable && (
                          <TableSortLabel
                            active={order.orderBy === column.id}
                            direction={order.orderBy === column.id ? 'desc' : 'asc'}
                            onClick={(event: any) => handelChangeOrder(event, column.id)}
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

export default UsersList
