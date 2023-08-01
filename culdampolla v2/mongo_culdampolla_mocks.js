
//customer 

db.customers.insertMany([
                         {
    "name" : "customer_1",
    "zip_code" : "12345c",
    "telephone": "123456",
    "email": "1234@gmail.com",
    "date_registered": new Timestamp()
    
},

{
    "name" : "customer_2",
    "zip_code" : "12345d",
    "telephone": "1234564568",
    "email": "2345@gmail.com",
    "date_registered": new Timestamp()
    
}
])


//suppliers
db.supplier.insertMany([
{
    "name" : "we sell glasses",
    "address" : {
        "street" : "our house",
        "number" : 1,
        "floor": 1,
        "door" : 1,
        "city" : "madrid",
        "zip_code" : "012345",
        "country" : "Spain"
    },
    "telephone" : "1234567",
    "fax" : "111222333",
    "NIF" : "12345t",
},
{
    "name" : "we also sell glasses",
    "address" : {
        "street" : "in the middle",
        "number" : 1,
        "floor": 1,
        "door" : 1,
        "city" : "barcelona",
        "zip_code" : "012345",
        "country" : "Spain"
    },
    "telephone" : "234567",
    "fax" : "445566",
    "NIF" : "34556745z",
},
{
    "name" : "we sell even better glasses",
    "address" : {
        "street" : "of the street",
        "number" : 1,
        "floor": 1,
        "door" : 1,
        "city" : "madrid",
        "zip_code" : "345678",
        "country" : "Spain"
    },
    "telephone" : "98764323",
    "fax" : "5432543",
    "NIF" : "342546y",
}
])

//sales

db.sales.insertOne({
	"date_sales" : new Timestamp(),
	"sales_or_order": "Sales",
	"glasses": [{"id_glasses": ObjectId('64bf9f345046bfc1d29e74e9'), "quantity": Double(1.0), "total_price": Decimal128("25.00")},
	            {"id_glasses": ObjectId('64bf9f345046bfc1d29e74ea'), "quantity": Double(3.0), "total_price": Decimal128("97.50")}],
	"employee_id" : "Jack",
    "clients" : ObjectId('64bf938e5046bfc1d29e74e0'),
   	})

db.sales.aggregate([{$lookup: {from: "customers", localField: "id_customer", foreignField: "_id", as: "id_customer"}}])

///glasses

db.supplier.insertMany([
                        {
    "make" : "Ray-Ban",
    "prescription" : 20,
    "frame" : "metallic",
    "color_frame" : "black",
    "color_glass" : "black",
    "price" : Decimal128("25.00"),
    "supplier_id": ObjectId('64bf99f15046bfc1d29e74e2')
},

{
    "make" : "Oakley",
    "prescription" : 20,
    "frame" : "plastic",
    "color_frame" : "blue",
    "color_glass" : "clear",
    "price" : Decimal128("32.50"),
    "supplier_id": ObjectId('64bf9a735046bfc1d29e74e3')
}
])

db.glasses.aggregate([{$lookup: {from: "supplier", localField: "id_supplier", foreignField: "_id", as: "id_supplier"}}])

