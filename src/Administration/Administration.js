import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import UsersList from './Users/UsersList'
import UserEditor from "./Users/UsersEditor/UsersEditor";

const Administration = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}/users`} component={UsersList} />
      <Route path={`${match.path}/users/:userId/edit`} component={UserEditor} />
    </>
  )
}

Administration.propTypes = {}

export default Administration
