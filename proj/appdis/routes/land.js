// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  console.log("land-get")
  if(request.cookies.auth){
    response.render("land", { id:request.cookies.auth});
  }
else{
  response.render("land", {id : false});
}

});

module.exports = router;