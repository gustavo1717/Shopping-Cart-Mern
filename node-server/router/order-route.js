let express = require("express");
let orderRoute = express.Router();
let orderDataModel =  require("../data-model/recentOrdersDataModel");
let cartDataModel = require("../data-model/cartDataModel");
let cancelledOrderDataModel = require("../data-model/cancelledOrdersDataModel")

orderRoute.get("/api/get/:userName", (req,res)=>{
    const userName = req.params.userName;
    console.log(userName)
    orderDataModel.findOne({userName}).then((list)=>{
        res.send(list);
    })
})

orderRoute.post("/api/remove", (req,res)=>{
    
    const  userName = req.body.userName;
    const id = req.body.id;
    console.log(userName, id)
    orderDataModel.findOne({userName: userName}).then((pastOrders) => {
        let cancelledOrder = pastOrders.orders.filter((item)=>item._id == id)[0]


        pastOrders.orders = pastOrders.orders.filter((item)=>item._id != id)
        pastOrders.save().then((newRecentOrders) => {
            res.send(cancelledOrder);
        })
    })
})

orderRoute.post("/api/save", (req,res)=>{
    let order = req.body.order;
    let username = req.body.username;
    


    orderDataModel.findOne({userName:username})
    .then((exisitingOrders)=>{
        if(exisitingOrders){
            cartDataModel.findOne({userName:username}).then((existingCart)=>{
                let order = {'cart': existingCart, 'orderDate': Date.now()};
                orderDataModel.findOne({'userName': username}).then((pastOrders) => {
                    pastOrders.orders = [...pastOrders.orders, order];
                    pastOrders.save().then((newRecentOrders) => {
                        // console.log(newRecentOrders)
                        console.log(newRecentOrders.orders.at(newRecentOrders.orders.length-1))

                        res.send(newRecentOrders.orders.at(newRecentOrders.orders.length-1))
                    
                    })
                })
            
            })
        } else {
            cartDataModel.findOne({userName:username}).then((existingCart)=>{
                let recentOrders = new orderDataModel({'userName': username, "orders": [{'cart': existingCart, 'orderDate': Date.now()}]})
                recentOrders.save().then((newRecentOrders) => {
                    console.log(newRecentOrders.orders.at(newRecentOrders.orders.length-1))
                    res.send(newRecentOrders.orders.at(newRecentOrders.orders.length-1))

                })
            
            })
        }
    }).catch((err)=>{
        console.log("err while save ", err);
        res.send("Error while save - existing cart")
    })
})


module.exports = orderRoute;