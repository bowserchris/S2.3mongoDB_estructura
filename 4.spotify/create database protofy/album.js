
db.createCollection( 'album', {validator: {$jsonSchema: {bsonType: 'object',title:'album',required: [         'artist',          'title',          'year_published'],properties: {artist: {bsonType: 'objectId', description:'this should be of type objectid and is required'},title: {bsonType: 'string', description:'this should be of type string and is required'},year_published: {bsonType: 'date', description:'this should be of type date and is required'},image_cover: {bsonType: 'binData', description:'this should be of type binData and is required'}}         }      }});  