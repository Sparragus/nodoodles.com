import mongoose from 'mongoose'

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
    default: ''
  },
  url: {
    type: String,
    default: ''
  }
})

const Doodle = mongoose.model('Doodle', doodleSchema)

export default Doodle
