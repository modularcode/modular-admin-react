import { setupWorker } from 'msw'
import usersMocks from './usersMocks'

const { start } = setupWorker(...usersMocks)

export default {
  async init() {
    // Remove all SW caches
    const cachesNames = await caches.keys()

    await Promise.all(cachesNames.map(name => caches.delete(name)))

    return start()
  },
}
