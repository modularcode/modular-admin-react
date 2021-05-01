import React from 'react'
import moment, { Moment } from 'moment'

// The default context, which is used when there is no provider
// (might be used for components testing)
export const usersListContextDefault = {
  filter: {
    dateFrom: moment().subtract(14, 'day').startOf('day'),
    dateTo: moment().startOf('day'),
  },
}

export const usersListContext = React.createContext(usersListContextDefault)

export const dashboardProvider = usersListContext.Provider
export const dashboardConsumer = usersListContext.Consumer

export default usersListContext
