import Entity, { EntityId } from '_api/_types/Entity'
import { UserId } from '_api/_types/User'
import { OrganizationId } from '_api/_types/Organization'

export type EntitiyOwnedId = EntityId

// The entity may be owned by an organization or an individual user
export default interface EntityOwned extends Entity {
  id?: EntityId
  ownerUserId?: UserId
  owenrOrganizationId?: OrganizationId
}
