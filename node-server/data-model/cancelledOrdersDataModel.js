let mongooseObj = require('mongoose');
schemaObj =mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack")

let productSchema = new schemaObj({
    name: {type: String, required:true},
    price: {type:Number, required:true},
    desc: String,
    rating:Number,
    qty:Number,
})

let cartSchema = new schemaObj({
        userName: {type:String, required: true},
        cartItems: [productSchema]
    }   
)

let OrderSchema = new schemaObj({
    cart: {type: cartSchema},
    orderDate: {type:Number},
})

let cancelledOrderSchema = new schemaObj({
    userName: {type: String, required: true},
    cancelledOrders: [OrderSchema]
})

let CancelledOrderModel = mongooseObj.model("CancelledOrder", cancelledOrderSchema);

module.exports = CancelledOrderModel;