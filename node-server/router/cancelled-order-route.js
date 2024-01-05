let express = require("express");
let cancelledOrderRoute = express.Router();
let cancelledOrderDataModel =  require("../data-model/cancelledOrdersDataModel");
let cartDataModel = require("../data-model/cartDataModel");

cancelledOrderRoute.get("/api/get/:userName", (req,res)=>{
    const userName = req.params.userName;
    console.log(userName)
    cancelledOrderDataModel.findOne({userName}).then((list)=>{
        res.send(list);
    })
})

cancelledOrderRoute.post("/api/save", (req,res)=>{
    let oldOrder = req.body.order;
    let username = req.body.username;


    console.log("req.body",req.body)


    cancelledOrderDataModel.findOne({userName:username})
    .then((exisitingOrders)=>{
        if(exisitingOrders){
                cancelledOrderDataModel.findOne({'userName': username}).then((pastOrders) => {
                    pastOrders.cancelledOrders = [...pastOrders.cancelledOrders, oldOrder];
                    pastOrders.save().then((newCancelledOrders) => {
                        // console.log(newCancelledOrders)
                        // console.log(newCancelledOrders.orders.at(newCancelledOrders.orders.length-1))

                        res.send(newCancelledOrders.cancelledOrders.at(newCancelledOrders.cancelledOrders.length-1))
                    
                    })
                })
            
        } else {
            
                let cancelledOrders = new cancelledOrderDataModel({'userName': username, "cancelledOrders": [oldOrder]})
                cancelledOrders.save().then((newCancelledOrders) => {
                    // console.log("here", newCancelledOrders.orders.at(newCancelledOrders.orders.length-1))
                    res.send(newCancelledOrders.cancelledOrders.at(newCancelledOrders.cancelledOrders.length-1))

                })
            
           
        }
    }).catch((err)=>{
        console.log("err while save ", err);
        res.send("Error while save - existing cart")
    })
})


module.exports = cancelledOrderRoute;