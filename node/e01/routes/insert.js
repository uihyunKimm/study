// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  response.render("insert");
});

router.post("/", function (request, response) {
  const body = request.body;

  mysql.query(
    "INSERT INTO Book(bookid, bookname, publisher, price) VALUES(?,?,?,?)",
    [body.bookid, body.bookname, body.publisher, body.price],
    function (error, results) {
      if (!error) {
        response.redirect("/");
      } else {
        console.log("Error");
      }
    }
  );
});

module.exports = router;
