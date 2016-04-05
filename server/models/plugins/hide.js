function hide (schema, options) {
  function transformer (doc, ret) {
    schema.eachPath((pathname, schemaType) => {
      if (schemaType.hide) {
        delete ret[pathname]
      }
    })
  }

  schema.set('toObject', {
    transform: transformer
  })
}

export default hide
