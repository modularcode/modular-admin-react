import uuidv4 from 'uuid/v4'
import moment from 'moment'
import MockAdapter from 'axios-mock-adapter'
import ordersData from '../_data/ordersData'

export default {
  init(mock: MockAdapter) {
    mock.onGet('/orders').reply((config: any) => {
      console.log('request config:', config)

      const matchingOrders = ordersData.list
      const ordersRes = matchingOrders.slice(0, 49)

      return [
        200,
        {
          orders: ordersRes,
          count: matchingOrders.length,
        },
      ]
    })

    //
    mock.onGet(/\/orders\/.*?/).reply((config: any) => {
      console.log('request config:', config)

      const urlPaths = config.url.split('/')
      const orderId = urlPaths[urlPaths.length - 1]
      const order = ordersData.byId[orderId]

      if (order) {
        return [200, { ...order }]
      } else {
        return [404, { message: 'User not found ' }]
      }
    })

    mock.onPut(/\/orders\/.*?/).reply((config: any) => {
      const urlPaths = config.url.split('/')
      const orderId = urlPaths[urlPaths.length - 1]
      const orderData = JSON.parse(config.data)
      const order = ordersData.byId[orderId]

      if (order) {
        return [200, { ...order, ...orderData }]
      } else {
        return [403, { message: 'Update not permitted' }]
      }
    })

    mock.onPost(/\/orders/).reply((config: any) => {
      const orderData = JSON.parse(config.data)
      const order = {
        ...orderData,
        id: uuidv4(),
        createdAt: moment().format(),
        updatedAt: moment().format(),
      }

      return [200, order]
    })

    mock.onDelete(/\/orders\/\d+/).reply((config: any) => {
      return [200, { message: 'Order removed' }]
    })
  },
}
