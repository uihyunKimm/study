// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  if(request.cookies.auth){
    response.render("articlewrite", { id : request.cookies.auth});
  }
else{
  response.render("articlewrite", {id : false});
}

});

module.exports = router;