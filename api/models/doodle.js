import mongoose from 'mongoose'

const doodleSchema = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: Date,
  image: String,
  alt: String,
  url: String
})

const Doodle = mongoose.model('Doodle', doodleSchema)

export default Doodle
