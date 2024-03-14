// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  response.render("plusadd");
});

router.post("/", function (request, response) {
  const body = request.body;
  mysql.query(
    "NSERT INTO routine (todonum, starttime, dotime, doendtime, todo) VALUES(?,?,?,?,?)",
    [body.todonum, body.starttime, body.dotime, body.doendtime, body.todo],
    function (error, results) {
      Error.stackTraceLimit = 0; // disables it
      Error.stackTraceLimit = Infinity; // disables any limit
      if (!error) {
        response.redirect("/plus");
      } else {
        console.log(Error);
      }
    }
  );
});

module.exports = router;
