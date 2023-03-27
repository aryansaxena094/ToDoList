const portnum = 4999;
const express = require("express");
const bodyParser = require("body-parser");
var items = [];
var workItems = [];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/", function(req, res){
    day = new Date().toLocaleString('en-us',{weekday:'long'});
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(portnum, function(){
    console.log("Server is running at port: " + portnum);
});
