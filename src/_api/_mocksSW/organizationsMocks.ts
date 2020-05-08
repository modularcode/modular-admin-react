import _ from 'lodash'
import { rest } from 'msw'

import config from '_config'
import organizationsData from './_data/organizationsData'

const apiUrl = config.api.url

export default [
  rest.get(`${apiUrl}/organizations`, (req, res, ctx) => {
    const { limit = 10, offset = 0, order = {} } = req.params
    const organizationsAll = order
      ? _.orderBy(organizationsData.list, [order.orderBy], [order.order])
      : organizationsData.list

    const result = {
      organizations: organizationsAll.slice(offset, offset + limit),
      count: organizationsAll.length,
    }

    return res(
      // Set custom status
      ctx.status(200),
      // Delay the response
      ctx.delay(1000),
      // send JSON response body
      ctx.json(result),
    )
  }),

  rest.get(`${apiUrl}/organizations/:organizationId`, (req, res, ctx) => {
    const { organizationId } = req.params
    const organization = organizationsData.byId[organizationId]

    if (organization) {
      return res(ctx.status(200), ctx.delay(200), ctx.json(organization))
    } else {
      return res(
        ctx.status(404),
        ctx.status(200),
        ctx.json({
          message: 'organization not found',
        }),
      )
    }
  }),

  rest.post(`${apiUrl}/organizations`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        // @ts-ignore
        ...req.body,
      }),
    )
  }),

  rest.put(`${apiUrl}/organizations/:organizationId`, (req, res, ctx) => {
    const { organizationId } = req.params
    const organization = organizationsData.byId[organizationId]

    if (organization) {
      return res(
        ctx.status(200),
        ctx.delay(200),
        ctx.json({
          ...organization,
          // ...req.body,
        }),
      )
    } else {
      return res(ctx.status(403), ctx.json({ message: 'Update not permitted' }))
    }
  }),

  rest.delete(`${apiUrl}/organizations/:organizationId`, (req, res, ctx) => {
    const { organizationId } = req.params
    const organization = organizationsData.byId[organizationId]

    if (organization) {
      return res(
        ctx.status(200),
        ctx.delay(200),
        ctx.json({
          message: 'Organization removed',
        }),
      )
    } else {
      return res(
        ctx.status(403),
        ctx.json({ message: 'Organization not found or forbidden' }),
      )
    }
  }),
]
