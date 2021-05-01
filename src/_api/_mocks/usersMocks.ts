import _ from 'lodash'
import { rest } from 'msw'

import config from '_config'
import usersData from './_data/usersData'

const apiUrl = config.api.url

const userMocks = [
  rest.get(`${apiUrl}/users/profile`, (rex, res, ctx) => {
    return res(ctx.json(usersData.current))
  }),

  rest.get(`${apiUrl}/users`, async (req, res, ctx) => {
    let limit = parseInt(req.params.limit || '10')
    let offset = parseInt(req.params.offset || '0')
    let order = req.params.order ? JSON.parse(req.params.order || '{}') : null

    const usersAll = order
      ? _.orderBy(usersData.list, [order.orderBy], [order.order])
      : usersData.list

    const result = {
      users: usersAll.slice(offset, offset + limit),
      count: usersAll.length,
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

  rest.get(`${apiUrl}/users/:userId`, (req, res, ctx) => {
    const { userId } = req.params
    const user = usersData.byId[userId]

    if (user) {
      return res(ctx.status(200), ctx.delay(200), ctx.json(user))
    } else {
      return res(
        ctx.status(404),
        ctx.status(200),
        ctx.json({
          message: 'User not found',
        }),
      )
    }
  }),

  rest.post(`${apiUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({
        // @ts-ignore
        ...req.body,
      }),
    )
  }),

  rest.put(`${apiUrl}/users/:userId`, (req, res, ctx) => {
    const { userId } = req.params
    const user = usersData.byId[userId]

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

  rest.delete(`${apiUrl}/users/:userId`, (req, res, ctx) => {
    const { userId } = req.params
    const user = usersData.byId[userId]

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
