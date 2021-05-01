import React from 'react'
import { Route, match as Match } from 'react-router-dom'
import UsersList from './Users/UsersList'
import UserEditor from './Users/UsersEditor'

export type AdministrationRouteParams = {
  userId: string
}

export type AdministrationProps = {
  match: Match<AdministrationRouteParams>
}

const Administration: React.FC<AdministrationProps> = ({ match }) => {
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
          <UserEditor {...props} userId={parseInt(match.params.userId)} />
        )}
      />
    </>
  )
}

Administration.propTypes = {}

export default Administration
