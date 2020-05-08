import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

// import { User } from '../_types/User'
// import { UserToOrganization } from '../_types/UserToOrganization'
// import { Organization } from '../_types/Organization'

import { create as createUsersData } from '../_data/usersData'
import { create as createUsersToOrganizationsData } from '../_data/usersToOrganizationsData'
import { create as createOrganizationsData } from '../_data/organizationsData'

const usersData = createUsersData({ includeOrganizations: false })
const usersToOrganizationsData = createUsersToOrganizationsData()
const organizationsData = createOrganizationsData({ includeUsers: false })

const adapter = new LocalStorage('db')
const db = low(adapter)

db.defaults({
  users: usersData.list,
  usersToOrganizations: usersToOrganizationsData.list,
  organizations: organizationsData.list,
}).write()

export const init = async function() {
  // console.log('Setting up a local session db...')

  try {
    db.set('users', usersData.list).write()
    db.set('usersToOrganizations', usersToOrganizationsData.list).write()
    db.set('organizations', organizationsData.list).write()

    //   // // Clear the DB
    //   // await db.organizations.clear()
    //   // await db.users.clear()
    //   // await db.usersToOrganizations.clear()
    //   // // Add the data
    //   // await db.users.bulkAdd(usersData.list)
    //   // await db.organizations.bulkAdd(organizationsData.list)
    //   // await db.usersToOrganizations.bulkAdd(usersToOrganizationsData.list)
    //   // console.log('Successfully set a local session db: ', db)
  } catch (err) {
    console.error('Error setting up local DB', err)
  }
  return db
}

export default db
