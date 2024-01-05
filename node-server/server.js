const express = require('express')
const userRoute = require('./router/user-route')
const productRoute = require('./router/product-route')
const app = express()
const userApp = express()
const cors = require('cors')
const cartRoute = require('./router/cart-route')
const orderRoute = require('./router/order-route')
const cancelledOrderRoute = require('./router/cancelled-order-route')

console.log("We are in server.js")

//Application
//Request
//Response
//Router


//create different route files for your api
// also mount the api/s using another express app
// create some static files and serve them in a new html, like console.log or alert

app.use(cors());
app.use('/static', express.static('public'));

app.use(express.json({limit:'2mb', extended:false}));

app.use('/user',userRoute)
app.use('/product',productRoute)
app.use('/cart', cartRoute)
app.use('/order',orderRoute)
app.use('/cancelled',cancelledOrderRoute)
userApp.use('/',userRoute)



//Open the port for api to start listening to the requests
console.log("We are listening at 9000")
app.listen(9000) //localhost:9000




//nodemon - node monitoring module, which listens to change and restarts api when needed