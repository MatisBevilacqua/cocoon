migrate((db) => {
  const collection = new Collection({
    "id": "sn909y5qfg5euif",
    "created": "2023-05-03 16:19:49.373Z",
    "updated": "2023-05-03 16:19:49.373Z",
    "name": "realisations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8agchgy8",
        "name": "banniere",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 1200000,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sn909y5qfg5euif");

  return dao.deleteCollection(collection);
})
