const express = require("express");
const app = express();
const BodyParse=require ("body-parser");
//5
const modul= require("./module.js")
console.log(modul.Twice(4));


//0

var func1 = (a)=>{
    return a*2;
}
var func2 = a=>a*2;

//3
app.post("/post.test",(req,res)=>{
    if(req.body.isA=="true"){
        res.send("a")
    }
    else{
        res.send("b")
    }
})

//2
app.get("/example.js",(req,res)=>{
    res.sendFile(__dirname+"/example.js");
})

//4
app.get("/:name.html",(req,res)=>{
    res.sendFile(__dirname+"/html/"+req.params.name+".html")
})

//1
app.get("/get.test",(req,res)=>{
    res.send("Hello world")
})

//2
app.get("/*",(req,res)=>{
    res.sendFile(__dirname+"/main.html");
})

app.listen(3000)