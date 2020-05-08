import { Server } from 'miragejs'

const organizationsRoutes = function(server: Server) {
  server.get('/organizations')
}

export default organizationsRoutes
