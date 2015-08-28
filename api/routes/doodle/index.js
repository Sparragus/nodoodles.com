import {Router} from 'express'
import {Doodle} from '../../models'
import moment from 'moment-timezone'

const doodleRoutes = Router()

doodleRoutes.route('/')
  .get(function (req, res) {
    Doodle.find({}, function (error, doodles) {
      if (error) {
        console.error(`Error fetching doodles`)
        return res.sendStatus(500)
      }

      return res.json(doodles)
    })
  })
  .post(function (req, res) {
    // TODO: Sanitize input.
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
      return res.sendStatus(201)
    })
  })

doodleRoutes.route('/:date')
  .get(function (req, res) {
    // TODO: Sanitize input.
    const date = moment(req.params.date)
    const year = date.year()
    const month = date.month()
    const day = date.date()

    const doodleDate = moment.tz(`${year}-${month+1}-${day}`, 'YYYY-MM-DD', 'UTC')

    Doodle.findOne({
      date: {
        $gte: doodleDate.startOf('day').clone(),
        $lte: doodleDate.endOf('day').clone()
      }
    }, function (error, doodle) {
      if (error) {
        console.error(`Error fetching doodle`)
        return res.sendStatus(500)
      }

      return res.json(doodle)
    })
  })
  .put(function (req, res) {
    res.sendStatus(501)
  })
  .delete(function (req, res) {
    res.sendStatus(501)
  })

export default doodleRoutes
