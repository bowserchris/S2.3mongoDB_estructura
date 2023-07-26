db.createCollection('employee', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["name_first","name_last","telephone", "NIF","role"],
				properties: {
					name_first: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					},
					name_last: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					}, 
					telephone: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					NIF: {
						bsonType: "string",
						description: "this should be of type string and is required"
					
					},
					role: {
						bsonType: "string",
                        enum: ["cook", "delivery"],
                        description: "accepted values are only: cook or delivery",
					}
				},
			}
		}
	}
	)