import EntityOwned, { EntitiyOwnedId } from './EntityOwned'
import ProductImage from './ProductImage'

export type ProductCategoryId = EntitiyOwnedId

export default interface Category extends EntityOwned {
  name: string
  description?: string
  parentId?: EntitiyOwnedId
  images?: ProductImage[]
}
