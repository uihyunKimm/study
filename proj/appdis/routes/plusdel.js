// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/:todonum", function (request, response) {
  mysql.query(
    "DELETE FROM routine WHERE todonum=?",
    [request.params.todonum],
    function (error, results) {
      if (!error) {
        console.log("삭제 완료");
        response.redirect("/plus");
      } else {
        console.log("Error");
      }
    }
  );
});


module.exports = router;
