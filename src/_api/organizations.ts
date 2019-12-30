import { AxiosResponse } from 'axios'
import Organization, {
  OrganizationSubmissionData,
  OrganizationId,
} from '_types/Organization'
import apiClient from './client'

export interface OrganizationsService {
  getOne(organizationId: OrganizationId): Promise<Organization>
  getList(params: any): Promise<OrganizationsListResponse>
  create(organization: OrganizationSubmissionData): Promise<Organization>
  update(
    organizationId: OrganizationId,
    organization: OrganizationSubmissionData,
  ): Promise<Organization>
  remove(organizationId: OrganizationId): Promise<any>
}

export interface OrganizationsListResponse {
  organizations: Organization[]
  count: number
}

const OrganizationsService: OrganizationsService = {
  getOne(organizationId) {
    return apiClient
      .get(`/organizations/${organizationId}`)
      .then((res: AxiosResponse<Organization>) => res.data)
  },
  getList(params: any) {
    return apiClient
      .get(`/organizations`, {
        params,
      })
      .then((res: AxiosResponse<OrganizationsListResponse>) => res.data)
  },
  create(organization: OrganizationSubmissionData) {
    return apiClient
      .post(`/organizations`, organization)
      .then((res: AxiosResponse<Organization>) => res.data)
  },
  update(organizationId, organization) {
    return apiClient
      .put(`/organizations/${organizationId}`, organization)
      .then((res: AxiosResponse<Organization>) => res.data)
  },
  remove(organizationId) {
    return apiClient
      .delete(`/organizations/${organizationId}`)
      .then((res: AxiosResponse<any>) => res.data)
  },
}

export default OrganizationsService
