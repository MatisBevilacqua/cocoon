migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sn909y5qfg5euif")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sn909y5qfg5euif")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
