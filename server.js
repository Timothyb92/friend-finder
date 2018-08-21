var express = require("express");
var fs = require("fs");
var app = express();
var PORT = 8080;

app.get("/", function(req, res){
    fs.readFile(__dirname + "/app/public/home.html", function(err, data){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
})

app.listen(PORT, function(){
    console.log("Listening on port " + PORT)
})