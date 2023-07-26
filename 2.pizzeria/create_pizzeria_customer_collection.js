db.createCollection('customer', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["name_first","name_last","telephone", "address"],
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
					address: {
						bsonType: "object",
						description: "this should be of type object and is required",
						required: ["province","city","zip_code"],
						properties:{
							province: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        },
							city: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        },
	                        zip_code: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        }
						}
					},
				},
			}
		}
	}
	)