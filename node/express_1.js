// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
// 미들웨어 설정1

app.use(function(request, response, next){
    // 데이터 추가
    request.number = 2023;
    response.number = 2024;
    next();
});

//미들웨어 설정2

app.use(function(request, response, next){
    // 응답
    response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});

app.listen(3000, function(){
console.log("Server Running at http://127.0.0.1:3000");
});