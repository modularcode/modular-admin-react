import { setupWorker } from 'msw'
import usersMocks from './usersMocks'
const { start } = setupWorker(...usersMocks)
export default {
  init: start,
}
