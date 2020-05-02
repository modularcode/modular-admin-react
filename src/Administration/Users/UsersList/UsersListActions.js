import clsx from 'clsx'
import React, { useContext, useState } from 'react'

import { fade, makeStyles, Button, Tooltip, InputBase } from '@material-ui/core'

import {
  MoreVert as IconMore,
  Tune as IconFilter,
  // ArrowDropDown as IconDropDown,
  Add as IconNew,
  Search as IconSearch,
} from '@material-ui/icons'

// import usersListContext from './usersListContext'

const DashboardActions = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  // const { filter } = useContext(usersListContext)

  const handleChangeSearchInput = event => {
    setSearch(event.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <IconSearch />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.searchInputRoot,
            input: clsx(
              classes.searchInputInput,
              search && classes.searchInputInputActive,
            ),
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChangeSearchInput}
        />
      </div>
      <Tooltip title="Create new">
        <Button color="secondary">
          <IconNew className={classes.iconNew} />
          New
        </Button>
      </Tooltip>
      <Tooltip title="Filter">
        <Button color="secondary">
          <IconFilter />
        </Button>
      </Tooltip>
      <Tooltip title="More actions">
        <Button color="secondary">
          <IconMore />
        </Button>
      </Tooltip>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
  },
  iconNew: {
    marginRight: 5,
  },
  search: {
    position: 'relative',
    display: 'inline-block',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0),
    '&:hover': {
      // backgroundColor: fade(theme.palette.common.white, 0.5),
      backgroundColor: 'rgba(140, 209, 54, 0.04)',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputRoot: {
    color: 'inherit',
  },
  searchInputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus, &.active': {
        width: '20ch',
      },
    },
  },
}))

export default DashboardActions
