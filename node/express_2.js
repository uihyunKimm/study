const express = require('express');
const fs = require('fs');

const app = express();

app.use(function(request, response){
    fs.readFile("index.html", function(err,data){
        response.send(data.toString());
    })
});

app.listen(3000, function(){
    console.log("Server Running at http://127.0.0.1:3000");
});