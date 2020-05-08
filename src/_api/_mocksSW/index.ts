import { setupWorker } from 'msw'
import usersMocks from './usersMocks'
import db, { init as initDb } from './db'

declare global {
  interface Window {
    db: any
  }
}

window.db = db

export default {
  async init() {
    // Remove all SW caches
    const cachesNames = await caches.keys()

    await Promise.all(cachesNames.map(name => caches.delete(name)))

    // Setup a DB
    await initDb()

    const { start } = setupWorker(...usersMocks)

    return start()
  },
}
