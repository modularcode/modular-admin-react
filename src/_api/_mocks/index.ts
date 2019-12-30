import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

import usersMocks from './usersMocks'
import organizationsMocks from './organizationsMocks'

const init = (instance: AxiosInstance) => {
  const mockAdapter = new MockAdapter(instance, { delayResponse: 200 })

  usersMocks.init(mockAdapter)
  organizationsMocks.init(mockAdapter)

  return mockAdapter
}

export default {
  init,
}
