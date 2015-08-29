import mongoose from 'mongoose'
import validate from 'mongoose-validator'

const emailValidator = [
  validate({
    validator: 'isEmail'
  })
]

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator
  }
})

const User = mongoose.model('User', userSchema)

export default User
