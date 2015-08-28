import {Router} from 'express'
import {Doodle} from '../../models'

const doodleRoutes = Router()

doodleRoutes.route('/')
  .get(function (req, res) {
    Doodle.find({}, function (error, doodles) {
      if (error) {
        console.error(`Error fetching doodles`)
        return res.sendStatus(500)
      }

      res.json(doodles)
    })
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
