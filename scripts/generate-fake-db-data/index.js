import faker from 'faker'
import mongoose from 'mongoose'
import {Doodle, User} from '../../api/models'
import config from '../../config'

console.log('Connecting to the database.')
mongoose.connect(config.database.development, function (error) {
  if (error) {
    throw new Error('Cannot establish connection to the database.')
    process.exit(1)
  }

  console.log('Connected to the database.')
})

const doodleAmount = 24
const doodleStartDate = new Date(2015, 0, 1)
const doodleEndDate = new Date(2015, 11, 31)

const userAmount = 8

console.log('Generating fake Doodle data.')
for (let i = 0; i < doodleAmount; i++) {
  Doodle.create({
    date: faker.date.between(doodleStartDate, doodleEndDate),
    image: faker.image.abstract(530, 271),
    alt: faker.lorem.sentence(12, 8),
    url: faker.internet.url()
  })
}

console.log('Generating fake User data.')
for (let i = 0; i < userAmount; i++) {
  User.create({
    name: faker.name.findName(),
    url: faker.internet.url()
  })
}

console.log('Finished.')
