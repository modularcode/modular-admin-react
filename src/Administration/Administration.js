import React, { useEffect } from 'react'
// import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import api from '../_api'

const Administration = ({ match }) => {
  useEffect(() => {
    api.users.getList().then(res => console.log('res', res))
  }, [])

  return (
    <div>
      {/* <Route path={`${match.path}/login`} component={Login} /> */}
      Hello Administration
    </div>
  )
}

Administration.propTypes = {}

export default Administration
