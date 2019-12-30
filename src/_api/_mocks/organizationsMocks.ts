import MockAdapter from 'axios-mock-adapter'
import organizationsData from '../_data/organizationsData'

export default {
  init(mock: MockAdapter) {
    mock.onGet('/organizations').reply(200, {
      organizations: {
        ...organizationsData.list,
      },
      count: organizationsData.list.length,
    })

    //
    mock.onGet(/\/organizations\/\d+/).reply((config: any) => {
      // console.log(config)
      const urlPaths = config.url.split('/')
      const organizationId = urlPaths[urlPaths.length - 1]
      const organization = organizationsData.byId[organizationId]

      if (organization) {
        return [200, { ...organization }]
      } else {
        return [404, { message: 'Organization not found ' }]
      }
    })

    mock.onPut(/\/organizations\/\d+/).reply((config: any) => {
      const urlPaths = config.url.split('/')
      const organizationId = urlPaths[urlPaths.length - 1]
      const organizationData = JSON.parse(config.data)
      const organization = organizationsData.byId[organizationId]

      if (organization) {
        return [200, { ...organization, ...organizationData }]
      } else {
        return [403, { message: 'Update not permitted' }]
      }
    })

    mock.onPost(/\/organizations/).reply((config: any) => {
      const organizationData = JSON.parse(config.data)

      return [200, { id: 100, ...organizationData }]
    })

    mock.onDelete(/\/organizations\/\d+/).reply((config: any) => {
      return [200, { message: 'Organization deleted' }]
    })
  },
}
