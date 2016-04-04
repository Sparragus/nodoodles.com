import Router from 'koa-router'
import compose from 'koa-compose'

import auth from '../middleware/auth'

// Routes
import signup from './users/signup'
import login from './users/login'

function noop (ctx, next) { return }

export default function () {
  const publ = new Router()
  const priv = new Router()

  // publ.get('*', async function (ctx, next) {
  //   ctx.body = 'Hello, World!'
  //   await next()
  // })

  // Public Routes
  publ.get('/doodle', noop) // Get today's doodle(s)
  publ.post('/signup', signup) // Sign up
  publ.post('/login', login) // Log in

  // Private Routes
  
  return compose([
    publ.routes(),
    publ.allowedMethods(),
    priv.routes(),
    priv.allowedMethods(),
    auth()
  ])
}
