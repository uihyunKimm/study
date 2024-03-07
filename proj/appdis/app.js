// 모듈 추출 및 서버 생성
const express = require("express");
const mysql = require("./routes/mysqlconn");
const ejs = require("ejs");

// 서버 생성
const app = express();

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

// 데이터베이스 연결
mysql.connect();

// view 엔진 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// 라우터 연결
const listRouter = require("./routes/list");
const addRouter = require("./routes/add");
const delRouter = require("./routes/del");
const editRouter = require("./routes/edit");


// 라우터 설정
app.use("/", listRouter);
app.use("/add", addRouter);
app.use("/del", delRouter);
app.use("/edit", editRouter);


// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});