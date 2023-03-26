const portnum = 4999;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", function(req, res){
    var today = new Date();
    
    if(today.getDay() === 6 || today.getDay() === 0) {
        res.send("yay its the weekend!");
    } else {
        res.send(":(:(:(its not the weekend!");
    }
});

app.listen(portnum, function(){
    console.log("Server is running at port: " + portnum);
});
