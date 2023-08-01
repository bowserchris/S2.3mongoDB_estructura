
db.createCollection( 'user', {validator: {$jsonSchema: {bsonType: 'object',title:'user',required: [         'type',          'email',          'password',          'username',          'date_of_birth',          'country'],properties: {type: {enum: free or premium, description:'this should be of type enum and is required',},email: {bsonType: 'string', description:'this should be of type string and is required'},password: {bsonType: 'string', description:'this should be of type string and is required'},username: {bsonType: 'string', description:'this should be of type string and is required'},date_of_birth: {bsonType: 'date', description:'this should be of type date and is required'},sex: {enum: m or f, description:'this should be of type enum and is required',},country: {bsonType: 'string', description:'this should be of type string and is required'},zip_code: {bsonType: 'string', description:'this should be of type string and is optional'}}         }      }});  