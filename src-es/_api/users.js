import apiClient from './client'
const usersService = {
  getProfile() {
    return apiClient.get('/users/profile').then((res) => res.data)
  },
  getOne(userId) {
    return apiClient.get(`/users/${userId}`).then((res) => res.data)
  },
  getList(params) {
    return apiClient
      .get(`/users`, {
        params,
      })
      .then((res) => res.data)
  },
  create(user) {
    return apiClient.post(`/users`, user).then((res) => res.data)
  },
  update(userId, user) {
    return apiClient.put(`/users/${userId}`, user).then((res) => res.data)
  },
  remove(userId) {
    return apiClient.delete(`/users/${userId}`).then((res) => res.data)
  },
}
export default usersService
