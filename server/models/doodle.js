import mongoose, { Schema } from 'mongoose'
import timestamps from './plugins/timestamps'

const { ObjectId } = Schema.Types

const Doodle = new Schema({
  image: { type: ObjectId, ref: 'Image' },
  altText: { type: String },
  url: { type: String },
  publicationDate: { type: Date, required: true },
  author: { type: ObjectId, ref: 'User', required: true },
  archived: { type: Boolean, default: false }
})

Doodle.plugin(timestamps)

export default mongoose.model('Doodle', Doodle)
