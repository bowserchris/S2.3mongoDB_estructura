db.createCollection('customers', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["name","zip_code","telephone", "email", "date_registered"],
				properties: {
					name: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					},
					zip_code: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					}, 
					telephone: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					email: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					date_registered: {
						bsonType: "timestamp",
						description: "this should be of type timestamp and is required"
					},
					recommended: {
					bsonType: "string",
					description: "this should be of type string and is optional"
					}
				},
			}
		}
	}
	)
