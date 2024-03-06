// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");
// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트

router.get("/", function (request, response) {
    let num = response.body.number.value
    let ttl = response.body.title.value
    let pub = response.body.publisher.value
    let prc = response.body.price.value

    response.render("list-add");

    mysql.query(`INSERT INTO Book (bookid, bookname, publisher, price) VALUES (?,?,?,?)`,[num,ttl,pub,prc], function (error, results) {
        if (!error) {
        response.redirect("/");
        } else {
        console.log(Error);
        }
    });

});

module.exports = router;


// app.get("/add", (request, response) => {
   
// })
// app.post("/add", (request, response) => {

// })