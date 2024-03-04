
//모듈 추출 및 서버 생성
const express = require("express");
// const fs = require("fs");
const cookieParser = require("cookie-parser");
const app = express();
const date = new Date();
date.setDate(date.getDate() + 30);
// 미들웨어 설정
app.use(cookieParser());
// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

    // 라우터 설정
    app.get("/", function (request, response) {
        response.redirect("/study/setUserCookie");
    });
app.get("/study/setUserCookie", function (request, response) {
    response.cookie("HELLOCODING", true, { expires: date,secure : true});
    response.redirect("/study/showUserCookie");
});
app.get("/study/showUserCookie", function (request, response) {
    response.send(request.cookies);
});

app.get("/deleteCookie", (request, response) =>{
    response.clearCookie("HELLOCODING");
    response.send("<h1>쿠키삭제</h1>");
});

// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});