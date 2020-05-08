import _ from 'lodash'
import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { create as createUsersData } from '../_data/usersData'

const usersData = createUsersData({ includeOrganizations: true })

export default {
  init(mock: MockAdapter, instance: AxiosInstance) {
    mock.onGet('/users/profile').reply(200, {
      ...usersData.current,
    })

    mock.onGet('/users').reply(config => {
      const { limit = 10, offset = 0, order = {}, customResponse } = config.params

      if (customResponse) {
        return [
          customResponse.status || 403,
          {
            message: customResponse.message || 'Something went wrong...',
          },
        ]
      }

      const usersAll = order
        ? _.orderBy(usersData.list, [order.orderBy], [order.order])
        : usersData.list

      if (order) {
      }

      return [
        200,
        {
          users: usersAll.slice(offset, offset + limit),
          count: usersAll.length,
        },
      ]
    })

    //
    mock.onGet(/\/users\/\d+/).reply((config: any) => {
      // console.log(config)
      const urlPaths = config.url.split('/')
      const userId = urlPaths[urlPaths.length - 1]
      const user = usersData.byId[userId]

      if (user) {
        return [200, { ...user }]
      } else {
        return [404, { message: 'User not found ' }]
      }
    })

    mock.onPut(/\/users\/\d+/).reply((config: any) => {
      const urlPaths = config.url.split('/')
      const userId = urlPaths[urlPaths.length - 1]
      const userData = JSON.parse(config.data)
      const user = usersData.byId[userId]

      if (user) {
        return [200, { ...user, ...userData }]
      } else {
        return [403, { message: 'Update not permitted' }]
      }
    })

    mock.onPost(/\/users/).reply((config: any) => {
      const userData = JSON.parse(config.data)

      console.log('config', config)
      console.log('userData', userData)

      return [200, { id: 100, ...userData }]
    })

    mock.onDelete(/\/users\/\d+/).reply((config: any) => {
      return [200, { message: 'User removed' }]
    })
  },
}
