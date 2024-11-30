const database = "BD3_ATVD4_DANIEL"

const collection = "BD3_ATVD4_CHAT"

use(database)

db.getCollection(collection).find().sort({dateSent: -1, hourSent: -1})