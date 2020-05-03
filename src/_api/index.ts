import instance from './client'
import organizations from './organizations'
import users from './users'
import config from '_config'

let apiMocks: any

if (config.api.useMocks) {
  apiMocks = require('./_mocks/')
}

const init = async () => {
  if (apiMocks) {
    await apiMocks.default.init()
  }

  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
