function timestamps (schema, options) {
  schema.add({
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date }
  })

  schema.pre('save', function (next) {
    this.modifiedAt = new Date()
    next()
  })
}

export default timestamps
