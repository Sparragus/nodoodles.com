import 'babel-polyfill'

import Koa from 'koa'
import logger from 'koa-logger'

import routes from './routes'

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  app.use(logger())
}

app.use(routes())

app.listen(3000)
