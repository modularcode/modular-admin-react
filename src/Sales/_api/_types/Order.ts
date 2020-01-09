import EntityOwned, { EntitiyOwnedId } from './EntityOwned'

import { PaymentId } from './Payment'
import { ProductId } from './Product'

export type OrderId = EntitiyOwnedId
export type OrderStatus =
  | 'received'
  | 'preparing'
  | 'shipped'
  | 'delivered'
  | 'rejected'
  | 'refunded'

export interface OrderProduct {
  id?: ProductId
  price?: number
  quantity?: number
}

export interface OrderSubmissionData {
  products?: any[]
  customerNotes?: string
}

// Order can be owned by a single account or user
export default interface Order extends EntityOwned {
  id?: OrderId
  name?: string
  status: OrderStatus
  customerNotes?: string
  staffNotes?: string
  paymentId?: PaymentId
  products?: any[]
  sum: number
}
