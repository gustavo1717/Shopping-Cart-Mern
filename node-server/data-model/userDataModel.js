let mongooseObj = require('mongoose');
schemaObj =mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack")

let userSchema = new schemaObj({
    userName: {type: String, required:true},
    password: {type:String, required:true},
    street: String,
    mobile:Number,
})

let UserModel = mongooseObj.model("user", userSchema);

module.exports = UserModel;