const express = require("express");
const app = express();
const BodyParse=require ("body-parser");

app.get("/click",(req,res)=>{//9
    res.sendFile(__dirname+"/click.html");
})

app.get("/yes",(req,res)=>{//7,8
    res.sendFile(__dirname+"/jquery_toggle.html");
})
app.listen(3000)