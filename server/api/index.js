import Router from 'koa-router'
import compose from 'koa-compose'

import auth from '../middleware/auth'

// Routes
import signup from './users/signup'
import login from './users/login'
import * as doodle from './doodles'
import * as user from './users'

function noop (ctx, next) { ctx.status = 501 }

export default function () {
  const publ = new Router({prefix: '/api'})
  const priv = new Router({prefix: '/api'})

  // Public Routes
  publ.get('/doodles', doodle.today) // Get one of today's doodles
  publ.post('/signup', signup) // Sign up
  publ.post('/login', login) // Log in

  // Private Routes
  priv.param('doodle', doodle.param) // Validate :doodle param
  priv.get('/doodles/:doodle', doodle.get) // Get doodle
  priv.post('/doodles', doodle.create) // Create a new doodle
  priv.put('/doodles/:doodle', doodle.upload.single('image'), doodle.update) // Edits a doodle
  priv.delete('/doodles/:doodle', doodle.archive) // Archives a doodle

  priv.param('user', user.param) // Validate :user param
  priv.get('/user/:user', user.get) // Get user profile
  priv.put('/user/:user', user.update) // Update a user profile
  priv.delete('/user/:user', user.archive) // Suspend a user account

  return compose([
    publ.routes(),
    publ.allowedMethods(),
    auth(),
    priv.routes(),
    priv.allowedMethods()
  ])
}
