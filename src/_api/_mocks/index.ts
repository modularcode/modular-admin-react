import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import usersMocks from './usersMocks'

const start =
  process.env.NODE_ENV !== 'test'
    ? setupWorker(...usersMocks).start
    : setupServer(...usersMocks)

export default {
  init: start,
}
