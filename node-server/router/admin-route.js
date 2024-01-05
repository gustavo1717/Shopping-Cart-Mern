const express = require("express");

const router = express.Router({});

router.get("/router", (req, res)=>{
    res.send("<h1>Express router</h1>")
})

router.get("hello", (req,res)=>{
    res.send("helloFromAdmin")
});