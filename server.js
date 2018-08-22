var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// app.get("/", function(req, res){
//     fs.readFile(__dirname + "/app/public/home.html", function(err, data){
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// })

app.listen(PORT, function(){
    console.log("Listening on port " + PORT)
})