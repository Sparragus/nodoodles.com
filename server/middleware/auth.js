import config from 'config'
import convert from 'koa-convert'
import compose from 'koa-compose'
import jwt from 'koa-jwt'

import User from '../models/user'

export default function auth () {
  function getUser () {
    return async function getUser (ctx, next) {
      ctx.state.user = await User.findById(ctx.state.user.id).exec()
      await next()
    }
  }

  return compose([
    convert(jwt({secret: config.jwt.secret})), // Check valid token
    getUser() // Get user from the db
  ])
}
