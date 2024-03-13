// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트

router.get("/", function (request, response) {
  response.render("articledetail");
});

// router.get("/:titlenum", function (request, response) {
//   mysql.query(
//     "SELECT * FROM article,comment WHERE article.titlenum = ? AND article.title = comment.title",
//   [request.params.titlenum],
//     function (error, results) {
//       if (!error) {
//         response.render("articledetail", { item: results[0] });
//       } else {
//         console.log("Error");
//     }
//   });
// });
/* router.get("/:titlenum", function (request, response) {
  mysql.query(
    "SELECT * FROM article WHERE titlenum = ?",
  [request.params.titlenum],
    function (error, results,) {
    if (!error) {
      response.render("articledetail", { item: results[0], leng: Object.keys(results).length-1});
    } else {
      console.log("Error");
    }
  });
});  */

  router.get("/:titlenum", function (request, response) {
  mysql.query(
    "SELECT * FROM article LEFT OUTER JOIN comment ON article.titlenum = comment.titlenum WHERE article.titlenum = ?",
  [request.params.titlenum],
    function (error, results) {
    if (!error) {
      console.log(results);
      response.render("articledetail", { item: results });
    } else {
      console.log(Error);
    }
  });
});


/* router.get("/:titlenum", function (request, response) {
  mysql.query(
    "SELECT * FROM article,comment WHERE title = ?",
  [request.body.title],
    function (error, results) {
    if (!error) {
      response.render("articledetail", { data: results[0] });
    } else {
      console.log("Error");
    }
  });
});
 */

module.exports = router;