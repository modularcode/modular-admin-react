import { AxiosResponse } from 'axios'
import Order, { OrderSubmissionData, OrderId } from './_types/Order'
import apiClient from '_api/client'

export interface OrdersService {
  get(params?: any): Promise<any>
  getList(params?: any): Promise<OrdersListResponse>
  getSum(params?: any): Promise<any>
  getCount(params?: any): Promise<any>
  getOne(orderId: OrderId): Promise<Order>
  create(order: OrderSubmissionData): Promise<Order>
  update(orderId: OrderId, order: OrderSubmissionData): Promise<Order>
  remove(orderId: OrderId): Promise<any>
}

export interface OrdersListResponse {
  orders: Order[]
  count: number
}

const ordersService: OrdersService = {
  get(params: any) {
    return apiClient
      .get(`/orders`, {
        params,
      })
      .then((res: AxiosResponse<OrdersListResponse>) => res.data)
  },
  getList(params: any) {
    return apiClient
      .get(`/orders`, {
        params,
      })
      .then((res: AxiosResponse<OrdersListResponse>) => res.data)
  },
  getSum(params: any) {
    return apiClient
      .get(`/orders/sum`, {
        params,
      })
      .then((res: AxiosResponse<OrdersListResponse>) => res.data)
  },
  getCount(params: any) {
    return apiClient
      .get(`/orders/count`, {
        params,
      })
      .then((res: AxiosResponse<OrdersListResponse>) => res.data)
  },
  getOne(orderId) {
    return apiClient
      .get(`/orders/${orderId}`)
      .then((res: AxiosResponse<Order>) => res.data)
  },
  create(order: OrderSubmissionData) {
    return apiClient.post(`/orders`, order).then((res: AxiosResponse<Order>) => res.data)
  },
  update(orderId, order) {
    return apiClient
      .put(`/orders/${orderId}`, order)
      .then((res: AxiosResponse<Order>) => res.data)
  },
  remove(orderId) {
    return apiClient
      .delete(`/orders/${orderId}`)
      .then((res: AxiosResponse<any>) => res.data)
  },
}

export default ordersService
