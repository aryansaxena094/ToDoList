const portnum = 4999;
const express = require("express");
const bodyParser = require("body-parser");
var item = "";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

app.get("/", function(req, res){
    day = new Date().toLocaleString('en-us',{weekday:'long'});
    res.render("list", {weekday: day, newListItem: item});
});

app.post("/", function(req, res){
    item = req.body.newItem;
    res.redirect("/");
});

app.listen(portnum, function(){
    console.log("Server is running at port: " + portnum);
});
