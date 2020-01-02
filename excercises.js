const express = require("express");
const app = express();
const BodyParse=require ("body-parser");
const modul= require("./module.js")
console.log(modul.Twice(4));

app.post("/post.test",(req,res)=>{
    if(req.body.isA=="true"){
        res.send("a")
    }
    else{
        res.send("b")
    }
})

app.get("/example.js",(req,res)=>{
    res.sendFile(__dirname+"/example.js");
})

app.get("/:name.js",(req,res)=>{
    res.sendFile(__dirname+"/js/"+req.params.name+".js")
})

app.get("/*",(req,res)=>{
    res.sendFile(__dirname+"/main.html");
})
app.listen(3000)