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

export async function create (ctx, next) {
  // TODO: Upload an image to S3. Save in database.
}
