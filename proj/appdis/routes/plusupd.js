// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

router.get("/", function (request, response) {
  response.render("plusupd");
});

// 페이지 라우트
router.get("/:id", function (request, response) {
  mysql.query(
    "SELECT * FROM routine WHERE todonum = ?",
    [request.params.id],
    function (error, results) {
      if (!error) {
        response.render("plusupd", { item: results[0] });
      } else {
        console.log("Error");
      }
    }
  );
});

router.post("/:todonum", function (request, response) {
  let body = request.body;
  mysql.query(
    "UPDATE routine SET starttime=?, dotime=?, doendtime=?, todo=? WHERE todonum=?",
    [body.starttime, body.dotime, body.doendtime, body.todo, request.params.todonum],
    function (error, results) {
      if (!error) {
        console.log("edit-post");
        response.redirect("/plus");
      } else {
        console.log("Error");
      }
    }
  );
});

module.exports = router;
