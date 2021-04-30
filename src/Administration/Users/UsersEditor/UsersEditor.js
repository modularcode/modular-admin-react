import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '@/_api'

import BasePageContainer from '@/_common/BasePageContainer'
import BasePageToolbar from '@/_common/BasePageToolbar'
import { Save as SaveIcon } from '@material-ui/icons/'
import {
  Input,
  Select,
  MenuItem,
  Paper,
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  Grid,
} from '@material-ui/core'

const UserEditor = (props) => {
  const classes = useStyles()

  const { userId } = props
  const [user, setUser] = useState({
    avatarUrl: '',
    email: '',
    firstName: '',
    globalRole: '',
    lastName: '',
    userToOrganizations: [{}],
    username: '',
  })

  useEffect(() => {
    if (!userId) {
      return
    }
    async function fetchUser() {
      try {
        const userDataRes = await api.users.getOne(userId)
        setUser(userDataRes)
      } catch (err) {
        console.log('error', err.message)
      }
    }
    fetchUser()
  }, [userId])

  const onChangeHandler = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })

  const setGlobalRole = (e) =>
    setUser({
      ...user,
      globalRole: e.target.value,
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (userId) {
        await api.users.update(userId, user)
      } else {
        await api.users.create(user)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <BasePageContainer>
      <BasePageToolbar title={'Edit user'}></BasePageToolbar>
      <Grid container xs={12} component={Paper} className={classes.box}>
        <form onSubmit={handleSubmit}>
          <FormControl className={classes.control}>
            <InputLabel>First Name</InputLabel>
            <Input
              value={user.firstName}
              name="firstName"
              className={classes.width}
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>
          <FormControl className={classes.control}>
            <InputLabel>Last Name</InputLabel>
            <Input
              value={user.lastName}
              name="lastName"
              className={classes.width}
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>
          <FormControl className={classes.control}>
            <InputLabel>User Name</InputLabel>
            <Input
              value={user.username}
              name="username"
              className={classes.width}
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>
          <FormControl className={classes.control}>
            <InputLabel>Email</InputLabel>
            <Input
              value={user.email}
              name="email"
              className={classes.width}
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>
          <FormControl className={classes.control}>
            <InputLabel>Global Role</InputLabel>
            <Select
              labelId="Set Global Role"
              id="globalRole"
              value={user.globalRole}
              onChange={setGlobalRole}
              className={classes.width}
            >
              <MenuItem value={user.globalRole}>{user.globalRole}</MenuItem>
              <MenuItem value="user">user</MenuItem>
              <MenuItem value="support">support</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={`${classes.margin} ${classes.width}`}
            startIcon={<SaveIcon />}
          >
            Edit User
          </Button>
        </form>
      </Grid>
    </BasePageContainer>
  )
}

UserEditor.propTypes = {
  userId: PropTypes.number,
}

const useStyles = makeStyles((theme) => ({
  box: {
    padding: 16,
  },
  control: {
    display: 'block',
    marginTop: 16,
  },
  margin: {
    marginTop: 16,
  },
  width: {
    minWidth: 200,
  },
}))

export default UserEditor
