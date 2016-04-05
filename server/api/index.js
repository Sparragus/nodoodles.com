import Router from 'koa-router'
import compose from 'koa-compose'

import auth from '../middleware/auth'

// Routes
import signup from './users/signup'
import login from './users/login'
import * as doodle from './doodles'

function noop (ctx, next) { ctx.status = 501 }

export default function () {
  const publ = new Router()
  const priv = new Router()

  // Public Routes
  publ.get('/doodle', noop) // Get one of today's doodles
  publ.post('/signup', signup) // Sign up
  publ.post('/login', login) // Log in

  // Private Routes
  priv.param('doodle', doodle.param) // Validate :doodle param
  priv.get('/doodle/:doodle', doodle.get) // Gets doodle
  priv.post('/doodle', doodle.create) // Create a new doodle
  // priv.put('/doodle/:doodle', doodle.upload.single('image'), noop) // Edits a doodle
  priv.delete('/doodle/:doodle', doodle.archive) // Archives a doodle

  return compose([
    publ.routes(),
    publ.allowedMethods(),
    auth(),
    priv.routes(),
    priv.allowedMethods()
  ])
}
