//모듈 추출
const express = require("express");
const mysql = require("mysql2");

// 서버 생성
const app = express();

// connection 객체 생성
const connection = mysql.createConnection({
user: "root",
password: "root",
database: "BookDB",
port: 3306,
});

// 데이터베이스 연결
connection.connect();

// 데이터베이스 쿼리 사용
connection.query("SELECT * FROM Book", function (error, result, fields) {
    if (error) {
    console.log("쿼리 문장에 오류가 있습니다.");
    console.log(error);
    } else {
    console.log(result);
    }
    });

// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});