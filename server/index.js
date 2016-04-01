import 'babel-polyfill'

import Koa from 'koa'
import logger from 'koa-logger'

import api from './api'

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  app.use(logger())
}

app.use(api())

app.listen(3000)
