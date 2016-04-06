import User from '../../models/user'

export async function param (id, ctx, next) {
  const user = User.findOne({_id: id, archived: false}).exec()
  ctx.assert(user, 404, `User not found: [id: ${id}]`)
  return next()
}

export async function get (ctx, next) {
  
}