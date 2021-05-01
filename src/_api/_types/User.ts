import Entity, { EntityId } from './Entity'

import Organization from './Organization'
import UserToOrganization from './UserToOrganization'

export type UserId = EntityId

// global user role across the system (useful for SAAS or if organizations arn't used)
// Each user can have only one global role
// export type UserGlobalRole = 'admin' | 'support' | 'member'

export interface UserSubmissionData {
  firstName?: string
  lastName?: string
  displayName?: string
  username?: string | null
  email: string
  password?: string
  avatarUrl?: string
  globalRole?: string
  status?: string
}

export interface User extends UserSubmissionData, Entity {
  id: UserId
  organizations?: Organization[]
  userToOrganizations?: UserToOrganization[]
}

export default User
