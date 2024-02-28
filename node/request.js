//모듈 추출
const express = require('express');
const { request } = require('http');

//서버 생성
const app = express();

////User-Agent 속성 추출
// app.use(function(request, response){
//     //User-Agent 속성 추출
//     const agent = request.header("User-Agent");

//     response.send("<p>User-Agent" + ":" + agent + "</p>");
// });

app.use(function(request, response){
    let name = request.query.name;
    let region = request.query.region;

    response.send('<h1>' + name + '-' + region + '</h1>');
});

app.listen(3000, function(){
    console.log("Server Running at http://127.0.0.1:3000");
});