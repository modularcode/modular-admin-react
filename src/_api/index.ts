import instance from './client'
// import mocks from './_mocks'
import organizations from './organizations'
import users from './users'

export interface ApiInitOptions {
  useSampleData?: boolean
}

const init = (options: ApiInitOptions = {}) => {
  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
