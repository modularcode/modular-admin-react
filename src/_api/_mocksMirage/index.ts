import { Server, Model } from 'miragejs'
import config from '@/_config/index'
import usersData from '../_data/usersData'
import usersToOrganizationsData from '../_data/usersToOrganizationsData'
import organizationsData from '../_data/organizationsData'

import usersRoutes from './users'
import organizationsRoutes from './organizations'

export function init({ environment }: { environment: 'development' }) {
  return new Server({
    environment,
    logging: true,

    models: {
      user: Model,
      usersToOrganization: Model,
      organization: Model,
    },

    routes() {
      // this.namespace = 'api'
      this.urlPrefix = config.api.url
      this.timing = 200

      usersRoutes(this)
      organizationsRoutes(this)
    },
    seeds(server) {
      server.db.loadData({
        users: usersData.list,
        usersToOrganizations: usersToOrganizationsData.list,
        organizations: organizationsData.list,
      })
    },
  })
}

export default {
  init,
}
