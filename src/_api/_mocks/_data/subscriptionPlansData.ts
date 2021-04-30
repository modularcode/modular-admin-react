import { get as _get, keyBy as _keyBy } from 'lodash'
import moment from 'moment'
import Plan from '../../_types/SubscriptionPlan'

const list: Plan[] = [
  {
    id: 1,
    name: 'Trial',
    price: 0,
    status: 'active',
  },
  {
    id: 2,
    name: 'Pro',
    price: 0,
    status: 'active',
  },
  {
    id: 2,
    name: 'Gold',
    price: 0,
    status: 'active',
  },
]

const byId: { [key: number]: Plan } = _keyBy(list, 'id')

const subscriptionPlansData = {
  list,
  byId,
  current: byId[1],
}

export default subscriptionPlansData
