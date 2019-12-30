import axios from 'axios'
import config from '../_config'
import authService from '../_services/authService'

const apiService = axios.create({
  baseURL: config.api.baseUrl,
})

// Use the Token header for all requests
apiService.interceptors.request.use(
  config => {
    const token = authService.getToken()
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Unauth the token if we get 401 unauth response from the server
apiService.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      authService.unauth()
    }

    return Promise.reject(error)
  },
)

export default apiService
