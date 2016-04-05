export default function error () {
  return async function error (ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = {
        success: false,
        error: err.message
      }

      ctx.app.emit('error', err, ctx)
    }
  }
}
