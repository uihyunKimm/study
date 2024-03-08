// 모듈 추출 및 서버 생성
const express = require("express");
const mysql = require("./routes/mysqlconn");
const cookieParser = require("cookie-parser");

// 서버 생성
const app = express();

// 데이터베이스 연결
mysql.connect();

// view 엔진 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// public 폴더 지정 - css, image
app.use(express.static("public"));

// body-parser
app.use(express.urlencoded({ extended: false }));

// 라우터 연결
const landRouter = require("./routes/land");
const loginRouter = require("./routes/login");


// 라우터 연결
app.use("/", landRouter);
app.use("/login", loginRouter);
// app.use("/del", delRouter);
// app.use("/edit", editRouter);

// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});