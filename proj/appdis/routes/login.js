// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");
const cookieParser = require("cookie-parser");

// 라우터 객체 생성
const router = express.Router();

app.use(cookieParser());
// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

// 페이지 라우트
router.get("/", function (request, response) {
  response.render("login");
});

router.post("/", function (request, response) {
  const body = request.body;

  mysql.query(
    // "INSERT INTO Book(bookid, bookname, publisher, price) VALUES(?,?,?,?)",
    // [body.bookid, body.bookname, body.publisher, body.price],
    // function (error, results) {
    //   if (!error) {
    //     response.redirect("/");
    //   } else {
    //     console.log("Error");
      }
    }
  );
});


app.post("/login", function (request, response) {
    const id = request.body.id;
    const password = request.body.password;
// 출력
    console.log(id, password);
// 로그인 확인
    if (id == "uihk" && password == "1234") {
    // 로그인 성공
        response.cookie("auth", true);
        response.redirect("/");
    } else {
    // 로그인 실패
        response.redirect("/login");
    }
});

app.get("/deleteCookie", (request, response) =>{
    response.clearCookie("auth");
    response.send("<h1>쿠키삭제</h1>");
});


module.exports = router;
