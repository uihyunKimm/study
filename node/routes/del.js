// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");
// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/:id", function (request, response) {
    let num = request.query.number
    mysql.query("DELETE FROM Book WHERE bookid = ?",[num], function (error, results) {
        if (!error) {
        response.redirect("/");
        } else {
        console.log("Error");
        }
    });
});
module.exports = router; 