import { Server } from 'miragejs'

const usersRoutes = function(server) {
  server.get('/users', (schema, request) => {
    const selection = schema.users.all()

    console.log('selection', selection)

    return {
      ...schema.users.all().slice(0, 10),
      count: schema.users.length,
    }
  })
}

export default usersRoutes
