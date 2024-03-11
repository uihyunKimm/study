// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");
const cookieParser = require("cookie-parser");

// 라우터 객체 생성
const router = express.Router();

router.use(cookieParser());
// application/x-www-form-urlencoded 방식 파싱
router.use(express.urlencoded({ extended: false }));

// 페이지 라우트

router.get("/", (request, response) =>{
    response.clearCookie("auth");
    response.redirect("http://127.0.0.1:3000");
});


module.exports = router;
