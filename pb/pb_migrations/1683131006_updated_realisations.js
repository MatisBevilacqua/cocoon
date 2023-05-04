migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sn909y5qfg5euif")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "usuynxnr",
    "name": "lieux",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v5czck3q",
    "name": "moodboard",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxqdpp0y",
    "name": "titre",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6p6k4xiu",
    "name": "texte",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9rtbqdnc",
    "name": "texte_fin",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpswj4sn",
    "name": "realisations",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 120000000,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ah3j4mwo",
    "name": "avant",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "irifrlmm",
    "name": "apres",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sn909y5qfg5euif")

  // remove
  collection.schema.removeField("usuynxnr")

  // remove
  collection.schema.removeField("v5czck3q")

  // remove
  collection.schema.removeField("kxqdpp0y")

  // remove
  collection.schema.removeField("6p6k4xiu")

  // remove
  collection.schema.removeField("9rtbqdnc")

  // remove
  collection.schema.removeField("lpswj4sn")

  // remove
  collection.schema.removeField("ah3j4mwo")

  // remove
  collection.schema.removeField("irifrlmm")

  return dao.saveCollection(collection)
})
