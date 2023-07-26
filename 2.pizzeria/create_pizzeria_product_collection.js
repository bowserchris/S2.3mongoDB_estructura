db.createCollection('product', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["type","name","description","image","price"],
				properties: {
					type: {
						bsonType: "string",
                        enum: ["pizza", "hamburger", "drink"],
                        description: "accepted values are only: pizza, hamburger or drink"
					},
					name: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					},
					description: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					},
					image: {
						bsonType: "binData", 
						description: "this should be of type binData and is required"
					},
					price: {
						bsonType: "decimal", 
						description: "this should be of type decimal and is required"
					},
					pizza_category: {
						bsonType: "string",
	                    description: "this should be of type string and is optional" 
					}
				}
			}
		}
	}
	)