import Entity, { EntityId } from './Entity'

import Organization, { OrganizationId } from './Organization'
import User, { UserId } from './User'

export type OrganizationToUserId = EntityId
export type OrganizationUserRole = 'member' | 'admin' | 'owner'

export default interface OrganizationToUser extends Entity {
  id: OrganizationToUserId
  organizationId: OrganizationId
  userId: UserId
  role: OrganizationUserRole
  organization?: Organization
  user?: User
}
