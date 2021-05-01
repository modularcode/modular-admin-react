import clsx from 'clsx'
import React, { useState } from 'react'

import { fade, makeStyles, Button, Tooltip, InputBase } from '@material-ui/core'

import {
  MoreVert as IconMore,
  Tune as IconFilter,
  // ArrowDropDown as IconDropDown,
  Add as IconNew,
  Search as IconSearch,
  Clear as IconClear,
} from '@material-ui/icons'

// import usersListContext from './usersListContext'

const UsersListActions: React.FC = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  // const { filter } = useContext(usersListContext)

  const handleChangeSearchInput: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setSearch(event.target.value)
  }

  const handelClickSearchClearButton = () => {
    setSearch('')
  }

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <IconSearch />
        </div>
        <InputBase
          placeholder="Search users…"
          classes={{
            root: classes.searchInputRoot,
            input: clsx(classes.searchInputInput, search && '-active'),
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={handleChangeSearchInput}
        />
        {search && (
          <div className={classes.searchButtonClear}>
            <Tooltip title="Clear search">
              <Button color="secondary" onClick={handelClickSearchClearButton}>
                <IconClear />
              </Button>
            </Tooltip>
          </div>
        )}
      </div>
      <Tooltip title="Create new user">
        <Button color="secondary">
          <IconNew className={classes.iconNew} />
          New
        </Button>
      </Tooltip>
      <Tooltip title="Filter users">
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

const useStyles = makeStyles((theme) => ({
  root: {
    // color: theme.palette.primary.main,
    color: theme.palette.grey[600],
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
  searchButtonClear: {
    position: 'absolute',
    height: '100%',
    top: 0,
    right: 0,
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
    paddingRight: '2.2em',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus, &.-active': {
        width: '20ch',
      },
    },
  },
}))

export default UsersListActions
