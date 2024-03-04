
// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();

app.use(express.static(__dirname + "/Public_3"));

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.redirect("/login.html");
})

app.post("/:name",function (request, response) {
    let name = request.params.name;
    let paramId = request.body.id;
    let paramPw = request.body.password;

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<p>NAME :' + name + '</p>');
    response.write('<p>NAME :' + paramId + '</p>');
    response.write('<p>NAME :' + paramPw + '</p>');
    response.end();
});
// 라우터 설정
// app.all('*', function(req, res){
//     response.status(404).send('<h1>ERROR-Page Not Found</h1>');
// });
// app.get('/login.html/:id', function(request, response){
//     let name = request.params.id;
//     express.response.send('<p>name</p>');
//     });

// app.post("/login.html",function (request, response) {
//     let name = request.params.id;
//     let paramId = request.body.id;
//     let paramPw = request.body.password;
//     response.send("<h1>로그인 페이지에서 응답 결과</h1><hr><p>NAME:" + name + "</p><br><p>ID:" + paramId + "</p><br><p>Password:" + paramPw + "</p>");
// });

// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});
