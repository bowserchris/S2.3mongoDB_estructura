db.createCollection('glasses', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["make","prescription","frame", "color_frame", "color_glass","price","supplier_id"], 
				properties: {
					make: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					},
					prescription: {
						bsonType: "int", 
						description: "this should be of type int and is required"
					}, 
					frame: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					color_frame: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					color_glass: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					price: {
						bsonType: "decimal",
						description: "this should be of type decimal and is required"
					},
					supplier_id: {
						bsonType: "objectId",
	                    description: "this should be of type objectId and is required"
					}
				},
			}
		}
	}
	)