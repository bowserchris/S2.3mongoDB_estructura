
db.createCollection( 'artist', {validator: {$jsonSchema: {bsonType: 'object',title:'artist',required: [         'name_first'],properties: {name_first: {bsonType: 'string', description:'this should be of type string and is required'},image: {bsonType: 'binData', description:'this should be of type binData and is required'},similar: {bsonType: 'array',description:'this should be of type objectid of other artists and is optional',items: {bsonType: 'objectId'}}}         }      }});  