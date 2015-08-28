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



doodleRoutes.param('date', function (req, res, next, requestedDate) {
  /**
   * When the user sends a date, she usually sends the date based on the local time.
   * An unexpected result may happen if the local time on the user's computer is on a
   * different day than UTC. For example, if it is 22:30 on August 27, 2015 in Mexico,
   * it would be 3:30 on August 28, 2015 in UTC.
   *
   * The user expects to see the Doodle of the day in their local time, not the day
   * of the time in the server.
   *
   * What we do is extract components from the requestedDate, and use them to create
   * a new Date object. This new date will have the same day as the user expects, 
   * but will be defined in UTC.
   *
   * Therefore, we always operate on the day the user expects.
   */

  // TODO: Sanitize input.
  const date = moment(requestedDate)
  const year = date.year()
  const month = date.month()
  const day = date.date()

  req.doodleDate = moment.tz(`${year}-${month+1}-${day}`, 'YYYY-MM-DD', 'UTC')

  next()
})

doodleRoutes.route('/:date')
  .get(function (req, res) {
    const doodleDate = req.doodleDate

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
