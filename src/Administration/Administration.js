import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import UsersList from './Users/UsersList'

const Administration = ({ match }) => {
  return (
    <>
      <Route path={`${match.path}/users`} component={UsersList} />
    </>
  )
}

Administration.propTypes = {}

export default Administration
