import _ from 'lodash'
import { rest } from 'msw'

import config from '_config'
import db from './db'
import { create as createUsersData } from '../_data/usersData'

const apiUrl = config.api.url
const usersData = createUsersData({ includeOrganizations: true })

export default [
  rest.get(`${apiUrl}/users/me`, (rex, res, ctx) => {
    return res(ctx.json(usersData.current))
  }),

  rest.get(`${apiUrl}/users`, async (req, res, ctx) => {
    let limit = parseInt(req.query.get('limit') || '0')
    let offset = parseInt(req.query.get('offset') || '10')
    let order = JSON.parse(req.query.get('order') || '{}')

    try {
      let selection = db.get('users')
      // .filter({ published: true })
      // .sortBy('views')
      // .take(5)

      console.log('selection', selection)

      // let table = db.users
      // let selection = table.toCollection()
      // let selectionResult = table.toCollection()

      // if (order && order.order === 'desc') {
      //   selectionResult = table.orderBy(order.orderBy).reverse()
      // } else if (order && order.order !== 'desc') {
      //   selectionResult = table.orderBy(order.orderBy)
      // }

      // selectionResult = selection.limit(limit).offset(offset)

      // const users = await selectionResult
      //   .limit(limit)
      //   .offset(offset)
      //   .toArray()
      // const count = await selection.count()

      // console.log('users', users)
      // console.log('count', count)

      return res(
        // Set custom status
        ctx.status(200),
        // Delay the response
        ctx.delay(500),
        // send JSON response body
        ctx.json({
          users: [],
          count: [],
        }),
      )
    } catch (err) {
      console.error(err)

      return res(
        ctx.status(400),
        ctx.json({
          message: err.message,
        }),
      )
    }
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
