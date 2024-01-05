const express = require('express')
const admin_route = require('../router/admin-route')
const app = express()
const adminApp = express()

const studentApp = express.Router({})

console.log("We are in server.js")

//Application
//Request
//Response
//Router


//create different route files for your api
// also mount the api/s using another express app
// create some static files and serve them in a new html, like console.log or alert

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/file', function(req, res) {
    res.sendFile(__dirname+"/public/index.html");
})

app.get("/queryparam", function(req,res) {
    let query = req.query["name"]
    res.send(`This is the name sent in param ${query}`)
})

app.get("/routeparam/:name", function(req, res){
    let params = req.params["name"];
    res.send(`This is the name sent in route ${params}`)
})

studentApp.get('/', function(req,res){
    let fname= req.query['firstName'];
    let lname= req.query['lastName'];
    let address = req.query['address'];

    let name = {"firstName": fname, "lastName":lname, address}

    console.log(name);

    res.send(JSON.stringify(name));
})

app.get('/hello', function (req, res) {
    if(req.headers['user-agent'].indexOf("Android") >= 0 || req.headers['user-agent'].indexOf('iPhone') >= 0) {
        console.log(req.headers['user-agent'].indexOf('Android'))
        console.log(req.headers['user-agent'].indexOf('iPhone'))
        res.json({
            "user-device": `${req.headers['user-agent']}`,
            "Status": 200
        })
    } else {
        res.json({
            "Name":"Jason",
            "Status" : 2000,
            "Session" : "MERNStack"
        })
    }
})


app.use('/admin',adminApp)
app.use('/student',studentApp)


adminApp.get('/hello',(req,res)=>{
    res.send("Hello from admin");
})

app.get('*', (req,res)=>{
    res.send("<h2>API you are looking for is not ready yet.</h2>")
})


//Open the port for api to start listening to the requests
console.log("We are listening at 9000")
app.listen(9000) //localhost:9000




//nodemon - node monitoring module, which listens to change and restarts api when needed