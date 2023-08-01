db.createCollection('sales', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["date_sales", "sales_or_order", "glasses", "clients","employee_id"], 
				properties: {
					date_sales: {
						bsonType: "timestamp", 
						description: "this should be a new Timestamp() and is required"
					},
					sales_or_order: {
						enum: ["Sales", "Order"],
						description: "this should be Sales or Order"
					},
					glasses: {
						bsonType: ["array"],
						minItems: 1, 
						uniqueItems: true,
						additionalProperties: false,
						items: {
							bsonType: ["object"],
							required: ["id_glasses", "quantity","total_price"],
							additionalProperties: false,
							description: "'items' must contain the stated fields.",
							properties: {
								id_glasses: {
									bsonType: "objectId",
									description: "this should be an objectId and is required"
								},
								quantity:{
									bsonType: "double",
									description: "this should be a double and is required"
								},
								total_price: {
									bsonType: "decimal",
									description: "this should be of type decimal and is required"
								}
							}
						}
					},
					employee_id: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					clients: {
						bsonType: "objectId",
						description: "this should be of type objectId and is required"
					}
				},
			}
		}
	}
	)
