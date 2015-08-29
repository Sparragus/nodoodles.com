import mongoose from 'mongoose'
import validate from 'mongoose-validator'

const urlValidator = [
  validate({
    validator: 'isURL'
  })
]

// Requiring all the fields forces a design on the Doodle. Therefore, all doodles
// will always have an image, an alt text, and a url.
const doodleSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    validate: urlValidator
  }
})

const Doodle = mongoose.model('Doodle', doodleSchema)

export default Doodle
