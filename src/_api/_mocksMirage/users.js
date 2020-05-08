import { Server } from 'miragejs'

const usersRoutes = function(server) {
  server.get('/users', (schema: any, request) => {
    console.log('schema', schema)

    return schema.users.all()
  })
}

export default usersRoutes
