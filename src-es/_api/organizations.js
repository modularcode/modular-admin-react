import apiClient from './client'
const OrganizationsService = {
  getOne(organizationId) {
    return apiClient.get(`/organizations/${organizationId}`).then((res) => res.data)
  },
  getList(params) {
    return apiClient
      .get(`/organizations`, {
        params,
      })
      .then((res) => res.data)
  },
  create(organization) {
    return apiClient.post(`/organizations`, organization).then((res) => res.data)
  },
  update(organizationId, organization) {
    return apiClient
      .put(`/organizations/${organizationId}`, organization)
      .then((res) => res.data)
  },
  remove(organizationId) {
    return apiClient.delete(`/organizations/${organizationId}`).then((res) => res.data)
  },
}
export default OrganizationsService
