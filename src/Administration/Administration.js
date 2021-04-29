import React from 'react'
import { Route } from 'react-router-dom'
import UsersList from './Users/UsersList'
import UserEditor from './Users/UsersEditor/UsersEditor'

const Administration = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}/users`} component={UsersList} />
      <Route
        path={`${match.path}/users/new`}
        render={(props) => <UserEditor {...props} />}
      />
      <Route
        path={`${match.path}/users/:userId/edit`}
        render={(props) => (
          <UserEditor {...props} userId={parseInt(props.match.params.userId)} />
        )}
      />
    </>
  )
}

Administration.propTypes = {}

export default Administration
