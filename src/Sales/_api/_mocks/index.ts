import MockAdapter from 'axios-mock-adapter'

import ordersMocks from './ordersMocks'

const init = (mockAdapter: MockAdapter) => {
  ordersMocks.init(mockAdapter)
}

export default {
  init,
}
