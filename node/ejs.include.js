
// 모듈 추출 및 서버 생성
const express = require('express');
const path = require('path');
const app = express();

// view 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, response) => {
    response.render("main",{
        title: "EJS레이아웃",
        description : "hahaha"
    })
});

app.listen(3000,function () {
    console.log("Server Running at http://127.0.0.1:3000");
})