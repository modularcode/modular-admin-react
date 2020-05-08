import Dexie from 'dexie'

import { User } from '../_types/User'
import { UserToOrganization } from '../_types/UserToOrganization'
import { Organization } from '../_types/Organization'

import { create as createUsersData } from '../_data/usersData'
import { create as createUsersToOrganizationsData } from '../_data/usersToOrganizationsData'
import { create as createOrganizationsData } from '../_data/organizationsData'

const usersData = createUsersData({ includeOrganizations: false })
const usersToOrganizationsData = createUsersToOrganizationsData()
const organizationsData = createOrganizationsData({ includeUsers: false })

console.log('usersData', usersData)

//
// Declare Database
//
class ModularAdminDatabase extends Dexie {
  public users: Dexie.Table<User, number> // id is number in this case
  public usersToOrganizations: Dexie.Table<UserToOrganization, number> // id is number in this case
  public organizations: Dexie.Table<Organization, number> // id is number in this case

  public constructor() {
    super('ModularAdminDatabase')
    this.version(1).stores({
      organizations: '++id,name,username,updatedAt,createdAt',
      users:
        '++id,firstName,lastName,displayName,username,email,password,avatarUrl,globalRole,status,updatedAt,createdAt',
      usersToOrganizations: '++id,organizationId,userId,role,updatedAt,createdAt',
    })
    this.organizations = this.table('organizations')
    this.users = this.table('users')
    this.usersToOrganizations = this.table('usersToOrganizations')
  }
}

const db = new ModularAdminDatabase()

export const init = async function() {
  console.log('Setting up a local session db...')

  try {
    // Clear the DB
    await db.organizations.clear()
    await db.users.clear()
    await db.usersToOrganizations.clear()

    // Add the data
    await db.users.bulkAdd(usersData.list)
    await db.organizations.bulkAdd(organizationsData.list)
    await db.usersToOrganizations.bulkAdd(usersToOrganizationsData.list)

    console.log('Successfully set a local session db: ', db)
  } catch (e) {
    console.error('Error setting up local DB')
  }
  return db
}

export default db
