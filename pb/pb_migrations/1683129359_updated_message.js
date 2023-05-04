migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7oaaxnqn4fr7gn9")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7oaaxnqn4fr7gn9")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
