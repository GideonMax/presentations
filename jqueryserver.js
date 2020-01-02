const express = require("express");
const app = express();
const BodyParse = require("body-parser");
//app.use(BodyParse.json());
app.use(BodyParse.urlencoded({ extended: true }));
app.get("/click", (req, res) => {//9
    res.sendFile(__dirname + "/click.html");
})

app.get("/:name.load", (req, res) => {
    res.sendFile(__dirname + "/load/" + req.params.name + ".html")
})

app.get("/jquerydata", (req, res) => {//10,11
    res.sendFile(__dirname + "/jquery_data.html")
})
app.post("/post",(req,res)=>{
    console.log("a");
    
    console.log(req.body.data );
})
app.get("/example.dat", (req, res) => {
    res.send("data");
})

app.get("/yes", (req, res) => {//7,8
    res.sendFile(__dirname + "/jquery_toggle.html");
})
app.listen(3000)