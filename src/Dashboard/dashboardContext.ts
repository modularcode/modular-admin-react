import React from 'react'
import moment, { Moment } from 'moment'

// The default context, which is used when there is no provider
// (might be used for components testing)
export const dashboardContextDefault = {
  filter: {
    dateFrom: moment()
      .subtract(14, 'day')
      .startOf('day'),
    dateTo: moment().startOf('day'),
  },
}

export const dashboardContext = React.createContext(dashboardContextDefault)

export const dashboardProvider = dashboardContext.Provider
export const dashboardConsumer = dashboardContext.Consumer

export default dashboardContext
