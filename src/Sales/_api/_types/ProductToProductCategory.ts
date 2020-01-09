import { ProductId } from './Product'
import { ProductCategoryId } from './ProductCategory'

export default interface ProductToProductCategory {
  productId: ProductId
  productCategoryId: ProductCategoryId
}
