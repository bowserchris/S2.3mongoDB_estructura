
db.createCollection( 'users', {validator: {$jsonSchema: {bsonType: 'object',title:'users',required: [         'username',          'email',          'password',          'date_of_birth',          'sex',          'country'],properties: {username: {bsonType: 'string', description:'this should be of type string and is required'},email: {bsonType: 'string', description:'this should be of type string and is required'},password: {bsonType: 'string', description:'this should be of type string and is required'},date_of_birth: {bsonType: 'date', description:'this should be of type date and is required'},sex: {enum: m or f},country: {bsonType: 'string', description:'this should be of type string and is required'},zip_code: {bsonType: 'string', description:'this should be of type string and is optional'}}         }      }});  