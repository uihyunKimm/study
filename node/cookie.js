
// 모듈 추출 및 서버 생성
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//cookie-parser미들웨어 설정
app.use(cookieParser());

//라우터 설정
app.get('/getCookie', (req, response) => {
    //응답
    response.send(req.cookies)
});

app.get('/setCookie', (req, response) => {
    //쿠키설정
    response.cookie('string','cookie');
    response.cookie('json',{name:'cookie', property:'delicious'});
    response.redirect('/getCookie');
});

app.listen(3001,function () {
    console.log("Server Running at http://127.0.0.1:3001");
})