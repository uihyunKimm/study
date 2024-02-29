const express = require('express');
const app = express();

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정
app.use(express.static(__dirname + "/Public_2"));

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.redirect("/login.html");
})
app.get('//', (request, response) => {
    response.redirect("/join.html");
})

app.post("/login.html",function (request, response) {
    let paramId = request.body.id;
    let paramPw = request.body.password;

    // response.write("<p>" + paramId + "</p>");
    // response.write("<p>" + paramPw + "</p>");
    response.send("<h1>로그인페이지에서 응답한 결과</h1><hr><p>ID:" + paramId + "</p><br><p>Password:" + paramPw + "</p>");
});
app.post("/join.html",function (request, response) {
    let paramName = request.body.name;
    let paramAdd = request.body.address;

    // response.write("<p>" + paramId + "</p>");
    // response.write("<p>" + paramPw + "</p>");
    response.send("<h1>로그인페이지<br>ID:" + paramName + "<br> Address:" + paramAdd + "</h1>");
});




app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});