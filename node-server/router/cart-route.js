let express = require("express");
let cartRoute = express.Router();
let cartDataModel =  require("../data-model/cartDataModel");

cartRoute.get("/api/get/:userName", (req,res)=>{
    const userName = req.params.userName;
    cartDataModel.findOne({userName}).then((list)=>{
        res.send(list);
    })
})

cartRoute.post("/api/save", (req,res)=>{
    console.log(req.body);
    let products = req.body.cartItems;
    let username = req.body.userId;



    cartDataModel.findOne({userName:username}).then((existingCart)=>{
        if(existingCart) {
            console.log("already exists", existingCart);
            existingCart.userName = username
            existingCart.cartItems = products
            existingCart.save().then((newerCart)=>{
                res.send(newerCart);
            }).catch((err1)=>{
                res.send("error while saving")
            })
        } else { //product is not present go for product creation
            
            //use schema to create new product object
            let newCart = new cartDataModel({userName: username, cartItems: products});
            
            newCart.save().then((newerCart)=>{//will get _id once document is created
                console.log("successful save ", newerCart);
                res.send(newerCart)
            }).catch((err1)=>{
                console.log("err save", err1);
                res.send("error while save")
            })
        }
    }).catch((err)=>{
        console.log("err while save ", err);
        res.send("Error while save - existing cart")
    })
})


module.exports = cartRoute;