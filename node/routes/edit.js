// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");
// 라우터 객체 생성
const router = express.Router();


// 페이지 라우트
router.get("/:id", function (request, response) {
    mysql.query(
      "SELECT * FROM Book WHERE bookid = ?",
      [request.params.id],
      function (error, results) {
        if (!error) {
          response.render("update", { item: results[0] });
        } else {
          console.log("Error");
        }
      }
    );
  });

// 페이지 라우트
router.get("/", function (request, response) {
    let num = request.body.number.value
    let ttl = request.body.title.value
    let pub = request.body.publisher.value
    let prc = request.body.price.value

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