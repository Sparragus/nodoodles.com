import { defaultsDeep } from 'lodash'

function timestamps (schema, options = {}) {
  const defaultOptions = {
    createdAt: {
      name: 'createdAt',
      options: {
        type: Date,
        default: Date.now
      }
    },
    modifiedAt: {
      name: 'modifiedAt',
      options: {
        type: Date
      }
    }
  }

  const {createdAt, modifiedAt} = defaultsDeep({}, defaultOptions, options)

  schema.add({
    [createdAt.name]: createdAt.options,
    [modifiedAt.name]: modifiedAt.options
  })

  schema.pre('save', function (next) {
    this.modifiedAt = new Date()
    next()
  })
}

export default timestamps
