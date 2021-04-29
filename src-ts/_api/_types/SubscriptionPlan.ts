import Entity, { EntityId } from './Entity'

export type SubscriptionPlanId = EntityId

export interface SubscriptionPlanSubmissionData {
  name?: string
  price: number
  status?: 'active' | 'disabled'
}

export default interface SubscriptionPlan extends SubscriptionPlanSubmissionData, Entity {
  id: SubscriptionPlanId
}
