import instance from './client'
import organizations from './organizations'
import users from './users'
import config from '_config'

let mockServer: any

if (process.env.NODE_ENV === 'development') {
  mockServer = require('./_mocksMirage')
}

if (config.api.useMocks) {
  // apiMocks = require('./_mocks/')
}

const init = async () => {
  if (config.api.useMocks) {
    await mockServer.default.init({ environment: 'development' })
  }

  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
