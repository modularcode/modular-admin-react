import _groupBy from 'lodash/groupBy'
import OrganizationToUser from '_types/OrganizationToUser'

// import organizationsData from './organizationsData'
// import usersData from './usersData'

const list: OrganizationToUser[] = [
  {
    id: 1,
    organizationId: 1,
    userId: 1,
    role: 'owner',
    // organization: organizationsData.byId[1],
    // user: usersData.byId[1],
  },
  {
    id: 2,
    organizationId: 1,
    userId: 2,
    role: 'admin',
    // organization: organizationsData.byId[1],
    // user: usersData.byId[2],
  },
  {
    id: 3,
    organizationId: 1,
    userId: 2,
    role: 'member',
    // organization: organizationsData.byId[1],
    // user: usersData.byId[2],
  },
  {
    id: 4,
    organizationId: 2,
    userId: 2,
    role: 'owner',
    // organization: organizationsData.byId[2],
    // user: usersData.byId[2],
  },
  {
    id: 5,
    organizationId: 3,
    userId: 3,
    role: 'owner',
    // organization: organizationsData.byId[3],
    // user: usersData.byId[3],
  },
  {
    id: 6,
    organizationId: 3,
    userId: 2,
    role: 'member',
    // organization: organizationsData.byId[3],
    // user: usersData.byId[2],
  },
]

const byUserId = _groupBy(list, 'userId')
const byOrganizationId = _groupBy(list, 'organizationId')

export default {
  list,
  byUserId,
  byOrganizationId,
}
