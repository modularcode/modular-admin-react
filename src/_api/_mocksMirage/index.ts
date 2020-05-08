import { Server, Model } from 'miragejs'
import config from '_config'
import usersData from './_data/usersData'
import organizationsData from './_data/organizationsData'

export function init({ environment }: { environment: 'development' }) {
  return new Server({
    environment,

    models: {
      user: Model,
      organization: Model,
    },

    routes() {
      this.urlPrefix = config.api.url

      // this.resource("movie")
    },
    seeds(server) {
      server.db.loadData({
        movies: [{ title: 'Interstellar' }, { title: 'Inception' }, { title: 'Dunkirk' }],
      })
    },
  })
}

export default init

// new Server({
//   routes() {
//     this.namespace = 'api'

//     this.get('/movies', () => {
//       return {
//         movies: [
//           { id: 1, name: 'Inception', year: 2010 },
//           { id: 2, name: 'Interstellar', year: 2014 },
//           { id: 3, name: 'Dunkirk', year: 2017 },
//         ],
//       }
//     })
//   },
// })
