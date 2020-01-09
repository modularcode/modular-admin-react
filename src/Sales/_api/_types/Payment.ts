import { EntityId } from '_api/_types/Entity'

export type PaymentId = EntityId

export default interface Payment {
  id?: PaymentId
  status?: string
  transactionId?: string
  transactionStatus?: string
}
