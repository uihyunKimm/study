// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  mysql.query("SELECT * FROM comment", function (error, results) {
      if (!error) {
        response.render("articlewrite", { data: results });
      } else {
        console.log("Error");
      }
    });
  });

router.post("/", function (request, response) {
  const body = request.body;
  mysql.query(
    "INSERT INTO comment(commentnum, titlenum, commenttitle, commentcontent, time, id) VALUES(?,?,?,?,?,?)",
    [body.commentnum, body.titlenum ,body.commenttitle, body.commentcontent, now(), body.id],
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