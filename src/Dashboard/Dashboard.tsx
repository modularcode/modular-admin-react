import React from 'react'

import Grid from '@material-ui/core/Grid'

import BasePageContainer from '../_common/BasePageContainer'
import BasePageToolbar from '../_common/BasePageToolbar'

import DashboardActions from './DashboardActions'
import SubscriptionsHistory from './SubscriptionsHistory/'
import KeyMetrics from './KeyMetrics/'
import SubscriptionsRecent from './SubscriptionsRecent/'
import SubscriptionsBreakdown from './SubscriptionsBreakdown/'

export type DashboardProps = {}

const Dashboard: React.FC<DashboardProps> = () => {
  console.log('Dashboard rendered')

  return (
    <BasePageContainer>
      <BasePageToolbar title={'Dashboard'} ActionsComponent={DashboardActions} />
      <Grid container spacing={3}>
        <KeyMetrics />
        <Grid item xs={12}>
          <SubscriptionsHistory />
        </Grid>
        <SubscriptionsRecent />
        <SubscriptionsBreakdown />
      </Grid>
    </BasePageContainer>
  )
}

export default Dashboard
