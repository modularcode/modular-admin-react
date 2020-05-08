import { Server, Model } from 'miragejs'
import config from '@/_config/index'
import { create as createUsersData } from '../_data/usersData'
import { create as createUsersToOrganizationsData } from '../_data/usersToOrganizationsData'
import { create as createOrganizationsData } from '../_data/organizationsData'

import usersRoutes from './users'
import organizationsRoutes from './organizations'

const usersData = createUsersData({ includeOrganizations: false })
const usersToOrganizationsData = createUsersToOrganizationsData()
const organizationsData = createOrganizationsData({ includeUsers: false })

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
