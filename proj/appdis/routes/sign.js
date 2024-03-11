// 모듈과 변수 선언
const express = require("express");
const mysql = require("./mysqlconn");

// 라우터 객체 생성
const router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  response.render("sign");
});

router.post("/", function (request, response) {
  const body = request.body;
  const id = body.id;
  const password = body.password;
  const passwordcheck = body.passwordcheck;

  if (id && password && passwordcheck) {

  mysql.query('SELECT * FROM UserrInfo WHERE id = ?', [id], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
    if (error) throw error;
    if (results.length <= 0 && password == passwordcheck) {     // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우 
      mysql.query("INSERT INTO UserrInfo(id, password, passwordcheck, name, birth, gender, email, phone) VALUES(?,?,?,?,?,?,?,?)"
    [id, password, passwordcheck, body.name, body.birth, body.gender, body.email, body.phone], function (error, results){
        if (error) throw error2;
        response.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다! 다시 로그인해주세요.");
              document.location.href="/login";</script>`);
      });
      } else if (password != passwordcheck) {// 비밀번호가 올바르게 입력되지 않은 경우
        response.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
        ;</script>`);    
      }
      else {// DB에 같은 이름의 회원아이디가 있는 경우
          response.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
          ;</script>`);    
      } 
    });
  } else {// 입력되지 않은 정보가 있는 경우
    response.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
    ;</script>`);
  }
});


module.exports = router;
