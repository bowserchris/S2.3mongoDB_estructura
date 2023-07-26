db.createCollection('order', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["id_customer","id_store", "date_order", "type","products","total_price"], 
				properties: {
					id_customer: {
						bsonType: "objectId",
						description: "this should be an objectId and is required"
					},
					id_store: {
						bsonType: "objectId",
						description: "this should be an objectId and is required"
					},
					date_order: {
						bsonType: "timestamp", 
						description: "this should be a new Timestamp() and is required"
					},
					type: {
						bsonType: "string",
						enum: ["Delivery", "Pickup"],
						description: "this should be delivery or pickup"
					},
					products: {
						bsonType: ["array"],
						minItems: 1, 
						uniqueItems: true,
						additionalProperties: false,
						items: {
							bsonType: ["object"],
							required: ["id_product", "quantity"],
							additionalProperties: false,
							description: "'items' must contain the stated fields.",
							properties: {
								id_product: {
									bsonType: "objectId",
									description: "this should be an objectId and is required"
								},
								quantity:{
									bsonType: "int",
									description: "this should be a int and is required"
								},
								
							}
						}
					},
					total_price: {
						bsonType: "decimal",
						description: "this should be of type decimal and is required"
					}
				},
			}
		}
	}
	)