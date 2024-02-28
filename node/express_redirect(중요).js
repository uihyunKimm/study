const express = require('express');
const fs = require('fs');

const app = express();

app.use(function(request, response){
    //응답
    response.redirect('http://www.naver.com');
});

app.listen(3000, function(){
    console.log("Server Running at http://127.0.0.1:3000");
});