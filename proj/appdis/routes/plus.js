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
router.get("/", function (request, response) {
  if (request.cookies.auth) {
    response.render("plus")
    } else {
    response.send(`<script type="text/javascript">alert("로그인 후 이용해주세요"); 
    document.location.href="/login";</script>`);
    }
});


router.post("/:id", function (request, response) {
    const id = request.body.id;
    const password = request.body.password;
// 출력
    mysql.query(
      "SELECT * FROM UserrInfo WHERE id=? && password=?;",[id, password],
      function (error, results) {
        if (!error) {
          response.cookie("auth", true);
          response.redirect("/http://127.0.0.1:3000");
        } else {
          console.log("Error");
          response.redirect("/login");
          response.send(`<script type="text/javascript">alert("일치하지 않는 정보입니다. 다시 입력해주세요"); 
        document.location.href="/auth/register";</script>`);
        }
      }
    );
});

router.get("/", (request, response) =>{

    response.render("logincomplete");
});
router.get("/logout", (request, response) =>{
    response.clearCookie("auth");
    response.redirect("/http://127.0.0.1:3000");
});


module.exports = router;
