import 'babel-polyfill'

import Koa from 'koa'
import logger from 'koa-logger'

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  app.use(logger())
}

app.use((ctx) => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)
