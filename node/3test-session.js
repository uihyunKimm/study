
// 모듈 추출 및 서버 생성
const express = require('express');
const session = require('express-session');
const app = express();
const date = new Date();
date.setDate(date.getDate() + 13);

//express-session 미들웨어 설정
app.use(session({
    name : "count",
    secret : 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie : {name: 'cookie'}
    }
));
app.get('/', (req, response) => {
    if (req.session.count){
        //count값 1 증가
        req.session.count++;
        response.send(`<h1>${req.session.count}번째 방문입니다.</h1>`);
    }else {
        req.session.count = 1;
        response.send(`<h1>${req.session.count}번째 방문입니다.</h1>`);
    }
});
//세션 설정
// app.get('/', (req, response) => {
//     //세션 설정
//     let num = 0;
//     let c = 1;
//     while(true) {
//     if(c>0){
//     req.session.i = num + c;
//     //응답
//     response.send(`<h1>${req.session.i}번째 방문입니다.</h1>`);
//     c++;
//     }else{
//         response.redirect("/");
//         break;}
//     }
// });

app.listen(3000,function () {
    console.log("Server Running at http://127.0.0.1:3000");
})