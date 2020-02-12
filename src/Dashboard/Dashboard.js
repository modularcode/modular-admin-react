import React from 'react'

import BasePageContainer from '../_common/BasePageContainer'
import BasePageToolbar from '../_common/BasePageToolbar'

import DashboardActions from './DashboardActions'

const Dashboard = () => {
  return (
    <BasePageContainer>
      <BasePageToolbar
        title={'Dashboard'}
        actionsComponent={DashboardActions}
      ></BasePageToolbar>
    </BasePageContainer>
  )
}

export default Dashboard
