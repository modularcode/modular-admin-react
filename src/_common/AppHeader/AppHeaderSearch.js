import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import IconSearch from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'

const HeaderSearch = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Search"
        className={classes.searchButton}
        onClick={handleClickOpen}
      >
        <IconSearch />
      </IconButton>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="dashboard-search"
        classes={{
          scrollPaper: classes.scrollPaper,
        }}
      >
        <DialogTitle id="dashboard-search">Search...</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You may provide some extra search hints here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Search text: e.g. puppies"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  searchButton: {
    marginRight: 20,
  },
  scrollPaper: {
    alignItems: 'flex-start',
  },
}))

export default HeaderSearch
