import {Router} from 'express'
import debug from 'debug'

import {User, Doodle} from '../../models'

const log = debug('nodoodles:api:routes:user')

const userRoutes = Router()

userRoutes.route('/')
  .post(function (req, res) {
    const {email} = req.body
    const user = new User({
      email
    })

    user.save(function saveUserToDatabase (error) {
      if (error) {
        log(`Failed to save user to database`)
        return next(error)
      }
      res.sendStatus(201)
    })
  })

/**
 * Get User from the database
 */
userRoutes.all('/:id/*', function getUserFromDatabase (req, res, next) {
  const id = req.params.id
  User.findById(id, function (error, user) {
    if (error) {
      log(`Error fetching user/${id}`)
      return next(error)
    }

    // We are not storing the user in req.user because that's what Passport.js does.
    req.doodleUser = user

    next()
  })
})

userRoutes.route('/:id')
  .get(function (req, res) {
    const doodleUser = req.doodleUser

    log(`GET user/${doodleUser.id}.`)
    return res.json(doodleUser)
  })
  .put(function (req, res) {
    const doodleUser = req.doodleUser

    // Set new value, or keep old
    doodleUser.email = req.body.email || doodleUser.email
    
    doodleUser.save(function (error) {
      if (error) {
        log(`Error saving user/${doodleUser.id}`)
        return next(error)
      }

      log(`PUT user/${doodleUser.id}`)      
      res.sendStatus(200)
    })
  })

userRoutes.route('/:id/doodles')
  .get(function (req, res) {
    const doodleUser = req.doodleUser

    Doodle.find({
      userId: doodleUser.id
    }, function (error, doodles) {
      if (error) {
        log(`Error fetching user/${doodleUser.id}/doodles`)
        return next(error)
      }

      res.json(doodles)
    })
  })

export default userRoutes
