
//모듈 추출 및 서버 생성
const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const app = express();
// 미들웨어 설정
app.use(cookieParser());
// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

    // 라우터 설정
app.get("/", function (request, response) {
    if (request.cookies.auth) {
    response.send("<h1>Login Success</h1>");
    } else {
    response.redirect("/login");
    }
});
app.get("/login", function (request, response) {
    fs.readFile("login.html", function (error, data) {
    response.send(data.toString());
    });
});

app.post("/login", function (request, response) {
// 쿠키 생성
    const id = request.body.id;
    const password = request.body.password;
// 출력
    console.log(id, password);
// 로그인 확인
    if (id == "uihk" && password == "1234") {
    // 로그인 성공
        response.cookie("auth", true);
        response.redirect("/");
    } else {
    // 로그인 실패
        response.redirect("/login");
    }
});

app.get("/deleteCookie", (request, response) =>{
    response.clearCookie("auth");
    response.send("<h1>쿠키삭제</h1>");
});

// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});