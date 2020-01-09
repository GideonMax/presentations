const express = require("express");
const app = express();
const BodyParse = require("body-parser");
app.use(BodyParse.urlencoded({ extended: true }));
app.get("/click", (req, res) => { //9
    res.sendFile(__dirname + "/click.html");
})

app.get("/:name.load", (req, res) => { //10
    res.sendFile(__dirname + "/load/" + req.params.name + ".html")
})

app.get("/jquerydata", (req, res) => { //10,11,12
    res.sendFile(__dirname + "/jquery_data.html")
})
app.post("/post", (req, res) => { //12

    console.log(req.body.data);
})
app.get("/example.dat", (req, res) => { //11
    res.send("data");
})

app.get("/yes", (req, res) => { //7,8
    res.sendFile(__dirname + "/jquery_toggle.html");
})
app.listen(3000)