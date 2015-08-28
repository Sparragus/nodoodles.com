import {Router} from 'express'
import {Doodle} from '../../models'

const doodleRoutes = Router()

doodleRoutes.route('/')
  .get(function (req, res) {
    res.sendStatus(501)
  })
  .post(function (req, res) {
    res.sendStatus(501)
  })

doodleRoutes.route('/:date')
  .get(function (req, res) {
    res.sendStatus(501)
  })
  .put(function (req, res) {
    res.sendStatus(501)
  })
  .delete(function (req, res) {
    res.sendStatus(501)
  })

export default doodleRoutes
