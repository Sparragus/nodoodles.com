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
    // TODO: Clean, parse, escape, Doodle properties.
    const {date, image, alt, url} = req.body
    const doodle = new Doodle({
      date,
      image,
      alt,
      url
    })

    doodle.save(function (error) {
      if (error) {
        console.error(`Error saving Doodle to database.`)
        return res.sendStatus(501)
      }

      console.log(`Saved Doodle to database.`)
      res.sendStatus(201)
    })
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
