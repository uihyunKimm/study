const http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {"content-Type":"text/html; charset=utf-8"});
    res.end("<h1>Hello</h1>");
}).listen(3000, function(){
    console.log("Server running at http://127.0.0.1:3000")});