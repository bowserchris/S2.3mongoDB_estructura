db.createCollection('store', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["address","employee"],
				properties: {
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
					employee: {
						bsonType: ["array"],
                    	minItems: 1, 
                    	uniqueItems: true,
                    	additionalProperties: false,
                    	items: {
							bsonType: ["object"],
							required: ["id_employee"],
							additionalProperties: false,
							description: "'items' must contain the stated fields.",
							properties: {
								id_employee: {
									bsonType: "objectId",
									description: "this should be an objectId and is required"
								}
							}
						}
					},
				}
			}
		}
	}
	)