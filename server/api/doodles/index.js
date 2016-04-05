import config from 'config'
import AWS from 'aws-sdk'
import multer from 'koa-multer'
import s3 from 'multer-s3'

import Doodle from '../../models/doodle'

const multerOptions = {
  storage: s3({
    dirname: 'uploads/doodles',
    bucket: config.aws.s3.bucket,
    secretAccessKey: config.aws.config.secretAccessKey,
    accessKeyId: config.aws.config.accessKeyId,
    region: 'us-east-1',
    s3ForcePathStyle: true,
    endpoint: config.aws.config.endpoint && new AWS.Endpoint(config.aws.config.endpoint),
    filename: function (req, file, cb) {
      // TODO: Do a better fileName
      const fileName = `${Date.now().toString()}-${file.originalname}`
      cb(null, fileName)
    }
  }),
  fileFilter: function fileFilter (req, file, cb) {
    // TODO: Create a filter
    cb(null, true)
  }
}

export const upload = multer(multerOptions)

export async function param (id, ctx, next) {
  const doodle = await Doodle.findOne({id: id, archived: false}).exec()
  ctx.assert(doodle, 404, `Doodle not found: [${id}]`)

  ctx.state.doodle = doodle

  return next()
}

export async function get (ctx, next) {
  const doodle = ctx.state.doodle

  ctx.type = 'json'
  ctx.body = doodle.toObject()
}

export async function create (ctx, next) {
  const { publicationDate } = ctx.request.body
  // TODO: Validate publicationDate
  ctx.assert(publicationDate, 422, 'publicationDate not given')

  // TODO: Make sure the user does not have a doodle for that day
  const doodle = await Doodle.create({
    publicationDate,
    author: ctx.state.user
  })

  ctx.status = 201
  ctx.type = 'json'
  ctx.body = doodle.toObject()
}

export async function archive (ctx, next) {
  const doodle = ctx.state.doodle
  doodle.archived = true
  await doodle.save()

  ctx.type = 'json'
  ctx.body = { success: true }
}
