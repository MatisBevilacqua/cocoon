migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7oaaxnqn4fr7gn9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3kwlssjv",
    "name": "telephone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7oaaxnqn4fr7gn9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3kwlssjv",
    "name": "telphone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
