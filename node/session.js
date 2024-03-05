
// 모듈 추출 및 서버 생성
const express = require('express');
const session = require("express-session");
const app = express();

//express-session 미들웨어 설정
app.use(session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie : { maxAge : 60 * 60 * 1000}
    }
));

//세션 설정
app.get('/', (req, response) => {
    //세션 설정
    req.session.now = new Date().toString();
    //응답
    response.send(req.session);
});

app.listen(3000,function () {
    console.log("Server Running at http://127.0.0.1:3000");
})