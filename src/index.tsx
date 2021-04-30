import 'typeface-roboto'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import authService from './_services/authService'
import api from './_api'

// Mount the app only when auth services and api services are ready
// this solves api mocks issue
;(async () => {
  // Init the auth service
  authService.init()

  // Init rest API client
  await api.init()

  ReactDOM.render(<App />, document.getElementById('root'))
})()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
