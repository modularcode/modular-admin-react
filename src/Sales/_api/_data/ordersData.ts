import uuidv4 from 'uuid/v4'
import moment, { Moment } from 'moment'
import _keyBy from 'lodash/keyBy'
import _sortBy from 'lodash/sortBy'
import _random from 'lodash/random'
import _shuffle from 'lodash/shuffle'
import Order, { OrderStatus } from '../_types/Order'
import productsData from './productsData'

const orderStatuses: OrderStatus[] = [
  'received',
  'preparing',
  'shipped',
  'delivered',
  'rejected',
  'refunded',
]

// Generate orders data for lat 90 days (do it one per browser session)
const list = generateRandomOrdersHistory(90)
const byId: { [key: number]: Order } = _keyBy(list, 'id')

export default {
  orderStatuses,
  list,
  byId,
}

export function generateRandomOrdersHistory(numDays: number) {
  let list: Order[] = []
  const now = moment()

  for (
    let date = moment().subtract(numDays, 'days'), dayNumber = 1;
    date.isSameOrBefore(now);
    date.add(1, 'day'), dayNumber++
  ) {
    const dailyOrders = generateDailyRandomOrders(date)

    list = list.concat(dailyOrders)
  }

  return list
}

export function generateDailyRandomOrders(date: Moment): Order[] {
  // Ensure the orders are date sorted
  return _sortBy(
    new Array(_random(0, 10)).fill(undefined).map(num => generateRandomOrder(date)),
    order => moment(order.createdAt).toDate(),
  )
}

export function generateRandomOrder(date: Moment): Order {
  const shuffledProducts = _shuffle(productsData.list)
  const numProducts = _random(1, 3)
  const orderProductItems = shuffledProducts.slice(0, numProducts)
  const orderProducts = orderProductItems.map(product => ({
    id: product.id,
    price: product.price,
    quantity: _random(1, 2),
  }))
  const orderSum = orderProducts.reduce((sum, { price = 0, quantity = 0 }) => {
    return sum + price * quantity
  }, 0)
  const isSuccessfulOrder = _random(1, 10) > 2
  const orderStatus = isSuccessfulOrder
    ? orderStatuses[_random(0, 3)]
    : orderStatuses[_random(4, 5)]
  const orderDate = moment(date).set({
    hour: _random(0, 23),
    minute: _random(0, 59),
    second: _random(0, 59),
  })

  const order = {
    id: uuidv4(),
    products: orderProducts,
    sum: orderSum,
    status: orderStatus,
    createdAt: orderDate.format(),
    updatedAt: orderDate.format(),
  }

  return order
}
