import User from '../../models/user'

export async function param (id, ctx, next) {
  const user = User.findOne({_id: id, archived: false}).exec()
  ctx.assert(user, 404, `User not found: [id: ${id}]`)

  ctx.state.params.user = user

  return next()
}

export async function get (ctx, next) {
  const user = ctx.state.params.user
  ctx.type = 'json'
  ctx.body = user.toObject()
}

export async function update (ctx, next) {
  ctx.status = 501
}

export async function archive (ctx, next) {
  const user = ctx.state.params.user
  user.archived = true
  await user.save()

  ctx.type = 'json'
  ctx.body = { success: true }
}
