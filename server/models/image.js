import mongoose, { Schema } from 'mongoose'
import timestamps from './plugins/timestamps'

const Image = new Schema({
  url: { type: String, required: true }
})

// Adds createdAt and modifiedAt timestamps
Image.plugin(timestamps)

export default mongoose.model('Image', Image)
