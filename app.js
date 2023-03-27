const portnum = 4999;
const express = require("express");
const bodyParser = require("body-parser");
var items = [];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/", function(req, res){
    day = new Date().toLocaleString('en-us',{weekday:'long'});
    res.render("list", {weekday: day, newListItems: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(portnum, function(){
    console.log("Server is running at port: " + portnum);
});
