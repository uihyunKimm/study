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

  if (body.id !="" && body.Password !="" && body.Passwordcheck !="") {
    mysql.query('SELECT * FROM UserrInfo WHERE id = ?', [body.id], function(error, results) { 
      console.log(results)

    {if (results.length <= 0 && body.Password == body.Passwordcheck) { 
      console.log(results.length)
      console.log(body)
      console.log(body.Password)

    mysql.query("INSERT INTO Userrinfo(id, password, passwordcheck, name, birth, gender, email, phone) VALUES(?,?,?,?,?,?,?,?)",
  [body.id, body.Password, body.Passwordcheck, body.name, body.birth, body.gender, body.email, body.phone],
  function (error, results) {
      if (!error) {
      console.log('string')
      response.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다! 다시 로그인해주세요.");
            document.location.href="/login";</script>`);
      } else {
        console.log("ssssss : " + error)
      }
    });
    } else {// 입력되지 않은 정보가 있는 경우
      
    }
  }
});
}else{response.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
;</script>`);};
});

module.exports = router;