import Entity, { EntityId } from './Entity'

import Organization, { OrganizationId } from './Organization'
import User, { UserId } from './User'

export type UserToOrganizationId = EntityId
export type UserRole = 'member' | 'admin' | 'owner'

export interface UserToOrganization extends Entity {
  id: UserToOrganizationId
  organizationId: OrganizationId
  userId: UserId
  role: UserRole
  organization?: Organization
  user?: User
}

export default UserToOrganization
