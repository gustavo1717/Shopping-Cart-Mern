let express = require("express");
let userRoute = express.Router();
let userDataModel =  require("../data-model/userDataModel");



userRoute.post("/api/signinup", (req,res)=>{
    let user = req.body;
    console.log(user);

    userDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        } else { //user is not present go for user creation
    
            //use schema to create new user object
            let newUser = new userDataModel(user)//req.body
            
            newUser.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })
})


module.exports = userRoute;