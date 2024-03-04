// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
// 라우터 설정
app.get('/',function(req,res){
    express.response.send('<h1>Index Page</h1>');
});
app.all('*', function(req, res){
    response.status(404).send('<h1>ERROR-Page Not Found</h1>');
});
// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});