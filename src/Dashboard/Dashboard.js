import React from 'react'

import Grid from '@material-ui/core/Grid'

import BasePageContainer from '../_common/BasePageContainer'
import BasePageToolbar from '../_common/BasePageToolbar'

import DashboardActions from './DashboardActions'
import KeyNumbers from './KeyNumbers'
import Subscriptions from './Subscriptions'

const Dashboard = () => {
  return (
    <BasePageContainer>
      <BasePageToolbar
        title={'Dashboard'}
        actionsComponent={DashboardActions}
      ></BasePageToolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Subscriptions />
        </Grid>
        <KeyNumbers />
      </Grid>
    </BasePageContainer>
  )
}

export default Dashboard
