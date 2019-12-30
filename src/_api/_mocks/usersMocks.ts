import MockAdapter from 'axios-mock-adapter'
import usersData from '../_data/usersData'

export default {
  init(mock: MockAdapter) {
    mock.onGet('/users/profile').reply(200, {
      ...usersData.current,
    })

    mock.onGet('/users').reply(200, {
      users: {
        ...usersData.list,
      },
      count: usersData.list.length,
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
