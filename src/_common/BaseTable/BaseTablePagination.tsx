import React, { MouseEvent } from 'react'
import { TablePagination, TablePaginationProps, IconButton } from '@material-ui/core'
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage as LastPageIcon,
} from '@material-ui/icons/'

const BaseTablePaginationActions: React.FC<TablePaginationActionsProps> = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, 0)
  }

  const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page + 1)
  }

  const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
}

export type BaseTablePaginationProps = TablePaginationProps

const BaseTablePagination: React.FC<BaseTablePaginationProps> = (props) => {
  const { count, page, rowsPerPage, onChangePage, onChangeRowsPerPage = () => {} } = props

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 50]}
      colSpan={12}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        native: true,
      }}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      ActionsComponent={BaseTablePaginationActions}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

export default BaseTablePagination
