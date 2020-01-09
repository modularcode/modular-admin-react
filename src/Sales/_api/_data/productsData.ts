import _keyBy from 'lodash/keyBy'
import Product from '../_types/Product'

const list: Product[] = [
  {
    id: 1,
    name: 'Simple Mobile Prepaid - Apple iPhone 6s (32GB) - Space Gray',
    price: 300,
  },
  {
    id: 2,
    name: 'iPhoneXS',
    price: 399,
  },
  {
    id: 3,
    name: 'Apple iPhone 6, GSM Unlocked, 64GB - Space Gray (Renewed)',
    price: 500,
  },
  {
    id: 4,
    name: 'All-New Fire 7 Tablet (7" display, 16 GB) - Black',
    images: [
      {
        url: 'https://images-na.ssl-images-amazon.com/images/I/61N1v5re7SL._SL1000_.jpg',
      },
    ],
    price: 99.99,
  },
  {
    id: 5,
    name:
      'Echo (2nd Generation) - Smart speaker with Alexa and Dolby processing  - Sandstone Fabric',
    images: [
      {
        url: 'https://images-na.ssl-images-amazon.com/images/I/610d8E4usyL._SL1000_.jpg',
      },
    ],
    price: 49.99,
  },
]

const byId: { [key: number]: Product } = _keyBy(list, 'id')

const productsData = {
  list,
  byId,
}

export default productsData
