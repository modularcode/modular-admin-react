import { ProductId } from './Product'
import { LocationId } from './Location'

export default interface Stock {
  productId: ProductId
  locationId?: LocationId
  qunatity: number
}
