import _ from 'lodash'
import { rest } from 'msw'

import config from '_config'
import subscriptionPlansData from './_data/subscriptionPlansData'

const apiUrl = config.api.url

const userMocks = [
  rest.get(`${apiUrl}/subscriptionPlans`, async (req, res, ctx) => {
    let limit = parseInt(req.params.get('limit') || '0')
    let offset = parseInt(req.params.get('offset') || '10')
    let order = JSON.parse(req.params.get('order') || '{}')

    const subscriptionPlans = order
      ? _.orderBy(subscriptionPlansData.list, [order.orderBy], [order.order])
      : subscriptionPlansData.list

    const result = {
      subscriptionPlans: subscriptionPlans.slice(offset, offset + limit),
      count: subscriptionPlans.length,
    }

    return res(
      // Set custom status
      ctx.status(200),
      // Delay the response
      ctx.delay(500),
      // send JSON response body
      ctx.json(result),
    )
  }),

  rest.post(`${apiUrl}/subscriptionPlans`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        // @ts-ignore
        ...req.body,
      }),
    )
  }),

  rest.put(`${apiUrl}/subscriptionPlans/:subscriptionPlanId`, (req, res, ctx) => {
    const { subscriptionPlanId } = req.params
    const user = subscriptionPlansData.byId[subscriptionPlanId]

    if (user) {
      return res(
        ctx.status(200),
        ctx.delay(200),
        ctx.json({
          ...user,
          // ...req.body,
        }),
      )
    } else {
      return res(ctx.status(403), ctx.json({ message: 'Update not permitted' }))
    }
  }),

  rest.delete(`${apiUrl}/subscriptionPlans/:subscriptionPlanId`, (req, res, ctx) => {
    const { subscriptionPlanId } = req.params
    const user = subscriptionPlansData.byId[subscriptionPlanId]

    if (user) {
      return res(
        ctx.status(200),
        ctx.delay(200),
        ctx.json({
          message: 'User removed',
        }),
      )
    } else {
      return res(ctx.status(403), ctx.json({ message: 'User not found or forbidden' }))
    }
  }),
]

export default userMocks
