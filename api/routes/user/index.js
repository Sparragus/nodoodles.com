import {Router} from 'express'
import {User} from '../../models'

const userRoutes = Router()

userRoutes.route('/')
  .post(function (req, res) {
    res.sendStatus(501)
  })

userRoutes.route('/:id')
  .get(function (req, res) {
    res.sendStatus(501)
  })
  .put(function (req, res) {
    res.sendStatus(501)
  })

userRoutes.route('/:id/doodles')
  .get(function (req, res) {
    res.sendStatus(501)
  })

export default userRoutes
