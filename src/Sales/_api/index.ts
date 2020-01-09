import { AxiosInstance } from 'axios'
import { ApiInitOptions } from '_api'

import mocks from './_mocks'
import orders from './orders'
import MockAdapter from 'axios-mock-adapter/types'

export interface SalesApiInitOptions extends ApiInitOptions {
  instance: AxiosInstance
  mockAdapter?: MockAdapter
}

const init = (options: SalesApiInitOptions) => {
  if (options.useSampleData && options.mockAdapter) {
    mocks.init(options.mockAdapter)
  }
}

export default { init, orders }
export { init, orders }
