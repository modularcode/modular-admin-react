import config from '@/_config'

import instance from './client'
import organizations from './organizations'
import users from './users'

declare global {
  interface Window {
    server: any
  }
}

let mockServer: any

if (config.api.useMocks) {
  mockServer = require('./_mocksSW+lowdb')
}

const init = async () => {
  if (config.api.useMocks) {
    // window.server = await mockServer.default.init({ environment: 'development' })
    await mockServer.default.init()
  }

  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
