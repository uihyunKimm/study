// 모듈 추출
const fs = require("fs");
const http = require("http");
// 3000번 포트에 서버 생성 및 실행(이미지 제공)
http.createServer(function (request, response) {
fs.readFile('coffee.jpg', function(error, data){
response.writeHead(200, {'Content-Type':'image/jpeg'});
response.end(data);
});
}).listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});