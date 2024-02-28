const express = require('express');
const fs = require('fs');

const app = express();

app.use(function(request, response){
    const output = [];
    for(let i=0; i<3;i++){
        output.push({count : i,
        name : 'name -'+ i});
    }
    response.send(output);
});

app.listen(3000, function(){
    console.log("Server Running at http://127.0.0.1:3000");
});