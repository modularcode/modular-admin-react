import { AxiosResponse } from 'axios'
import User, { UserSubmissionData, UserId } from './_types/User'
import apiClient from './client'

export interface UsersService {
  getProfile(): Promise<User>
  getOne(userId: UserId): Promise<User>
  getList(params?: any): Promise<UsersListResponse>
  create(user: UserSubmissionData): Promise<User>
  update(userId: UserId, user: UserSubmissionData): Promise<User>
  remove(userId: UserId): Promise<any>
}

export interface UsersListResponse {
  users: User[]
  count: number
}

const usersService: UsersService = {
  getProfile() {
    return apiClient.get('/users/profile').then((res: AxiosResponse<User>) => res.data)
  },
  getOne(userId) {
    return apiClient.get(`/users/${userId}`).then((res: AxiosResponse<User>) => res.data)
  },
  getList(params: any) {
    return apiClient
      .get(`/users`, {
        params,
      })
      .then((res: AxiosResponse<UsersListResponse>) => res.data)
  },
  create(user: UserSubmissionData) {
    return apiClient.post(`/users`, user).then((res: AxiosResponse<User>) => res.data)
  },
  update(userId, user) {
    return apiClient
      .put(`/users/${userId}`, user)
      .then((res: AxiosResponse<User>) => res.data)
  },
  remove(userId) {
    return apiClient
      .delete(`/users/${userId}`)
      .then((res: AxiosResponse<any>) => res.data)
  },
}

export default usersService
