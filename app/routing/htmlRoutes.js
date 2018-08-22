var path = require("path");

module.exports = function (app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });
    
    app.use("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });
}
// app.get("/", function(req, res){
//     fs.readFile(__dirname + "/../public/home.html", function(err, data){
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// })

// app.get("/survey", function(req, res){
//     fs.readFile(__dirname + "/../public/survey.html", function(err, data){
//         res.writeHead(200, { "Content-Type": "text/html"});
//         res.end(data);
//     })
// })

// app.listen(PORT, function(){
//     console.log("Listening on port " + PORT)
// })