const express = require('express');
const app = express();

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정
app.use(express.static(__dirname + "/Public_3"));

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.redirect("/login.html");
})

app.post("/login.html",function (request, response) {
    let paramId = request.body.id;
    let paramPw = request.body.password;

    if(paramId == "dmlxld") {
        if (paramPw == "1234"){
            response.send("<h1>로그인성공</h1>");
        }
    } else {
        response.send("<h1>로그인실패</h1>");
    }
    // if (paramId != 'dmlxld'){
    //     response.send('아이디가 다릅니다')
    // }else if(paramPw != '1234'){
    //     response.send('비밀번호가 다릅니다.');
    // }else{
    // response.send("<h1>로그인성공</h1><hr><p> 입력한 ID:" + paramId + "</p><br><p> 입력한 Password:" + paramPw + "</p>");
    // }
});


app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});