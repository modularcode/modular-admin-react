import { EntityId } from '_api/_types/Entity'

export type CustomerId = EntityId

export default interface Customer {
  id?: CustomerId
  name?: string
  email?: string
  details?: object
}
