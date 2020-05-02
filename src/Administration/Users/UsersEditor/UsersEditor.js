import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '@/_api'

import BasePageContainer from '@/_common/BasePageContainer'
import BasePageToolbar from '@/_common/BasePageToolbar'
import Grid from "@material-ui/core/Grid";

const UserEditor = (props) => {

  const { userId } = props
  const [user, setUser] = useState({})

  useEffect(() => {
    if(!userId) {
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

  return (
    <BasePageContainer>
      <BasePageToolbar title={'Edit user'}></BasePageToolbar>
      <Grid container spacing={3}>
        UserEditor
      </Grid>
    </BasePageContainer>
  )
}

UserEditor.propTypes = {
  userId: PropTypes.number
}

export default UserEditor
