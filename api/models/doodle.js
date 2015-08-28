import mongoose from 'mongoose'

const doodleSchema = mongoose.Schema({
  imageURL: String,
  alt: String,
  link: String
})

const Doodle = mongoose.model('Doodle', doodleSchema)

export default Doodle
