import Entity, { EntityId } from './Entity'
import User from './User'
import UserToOrganization from './UserToOrganization'

export type OrganizationId = EntityId
export interface OrganizationPlan {
  id: number | string
  name: string
  features?: {}
}

export interface OrganizationSubmissionData {
  name: string
  username?: string
}

export default interface Organization extends OrganizationSubmissionData, Entity {
  id: OrganizationId
  plan: OrganizationPlan
  users?: User[]
  organizationUsers?: UserToOrganization[]
}
