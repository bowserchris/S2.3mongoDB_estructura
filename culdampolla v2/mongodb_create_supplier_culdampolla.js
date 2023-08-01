db.createCollection('suppliers', {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["name","address","telephone", "fax", "NIF"], 
				properties: {
					name: {
						bsonType: "string", 
						description: "this should be of type string and is required"
					},
					address: {
						bsonType: "object",
						description: "this should be of type object and is required",
						required: ["street","number","floor","door","city","zip_code","country"],
						properties:{
							street: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        },
							number: {
	                            bsonType: "int",
	                            description: "this should be of type int and is required"
	                        },
	                        floor: {
	                            bsonType: "int",
	                            description: "this should be of type int and is required"
	                        },
	                        door: {
	                            bsonType: "int",
	                            description: "this should be of type int and is required"
	                        },
	                        city: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        },
	                        zip_code: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        },
	                        country: {
	                            bsonType: "string",
	                            description: "this should be of type string and is required"
	                        }
						}
					}, 
					telephone: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					fax: {
						bsonType: "string",
						description: "this should be of type string and is required"
					},
					NIF: {
						bsonType: "string",
						description: "this should be of type string and is required"
					}
				},
			}
		}
	}
	)