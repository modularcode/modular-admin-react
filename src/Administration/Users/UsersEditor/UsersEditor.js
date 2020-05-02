import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '@/_api'

const UserEditor = ({ match }) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    async function fetchUser() {
      const userId = match.params.userId;
      try {
        const userDataRes = await api.users.getOne(userId)
        setUser(userDataRes)
      } catch (err) {
        console.log('error', err.message)
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      UserEditor
    </>
  )
}

UserEditor.propTypes = {}

export default UserEditor
