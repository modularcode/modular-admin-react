import _keyBy from 'lodash/keyBy'
import Category from '../_types/ProductCategory'

/*
  Electronics, Computers & Office
    ELECTRONICS
      TV & Video
      Home Audio & Theater
      Cell Phones & Accessories
      Wearable Technology
    COMPUTERS
      Computers, Tablets, & PC Products
      Monitors
      Drives & Storage
  Books & Audible
  Sports & Outdoors
*/

const list: Category[] = [
  {
    id: 1,
    name: 'Electronics, Computers & Office',
  },
  {
    id: 2,
    name: 'Electronics',
    parentId: 1,
  },
  {
    id: 3,
    name: 'TV & Video',
    parentId: 2,
  },
  {
    id: 4,
    name: 'Home Audio & Theater',
    parentId: 2,
  },
  {
    id: 5,
    name: 'Cell Phones & Accessories',
    parentId: 2,
  },
  {
    id: 6,
    name: 'Wearable Technology',
    parentId: 2,
  },
  {
    id: 7,
    name: 'Computers',
    parentId: 1,
  },
  {
    id: 8,
    name: 'Computers, Tablets, & PC Products',
    parentId: 7,
  },
  {
    id: 9,
    name: 'Monitors',
    parentId: 7,
  },
  {
    id: 10,
    name: 'Drives & Storage',
    parentId: 7,
  },
  {
    id: 11,
    name: 'Books & Audible',
  },
  {
    id: 11,
    name: 'Sports & Outdoors',
  },
]

const byId: { [key: number]: Category } = _keyBy(list, 'id')

export default {
  list,
  byId,
}
