import config from 'config'
import jwt from 'koa-jwt'

import User from '../../models/user'
import { compare } from '../../util/bcrypt'

export default async function login (ctx, next) {
  const body = ctx.request.body
  const { email, password } = body

  const user = await User.findOne({email: email.toLowerCase()}).exec()
  ctx.assert(user, 401, 'Wrong email or password')

  const correctPassword = await compare(password, user.password)
  ctx.assert(correctPassword, 401, 'Wrong email or password')

  const token = jwt.sign({
    id: user.id
  }, config.jwt.secret)

  ctx.body = {
    success: true,
    token
  }
}
