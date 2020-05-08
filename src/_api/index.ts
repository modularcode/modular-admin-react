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
  mockServer = require('./_mocksMirage')
}

const init = async () => {
  if (config.api.useMocks) {
    window.server = await mockServer.default.init({ environment: 'development' })
  }

  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
