import { ProductId } from './Product'
import { LocationId } from './Location'

export default interface StockAction {
  productId: ProductId
  locationId?: LocationId
  qunatity: number
  action: string
}
