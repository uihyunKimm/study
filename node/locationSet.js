// 모듈 추출
const http = require("http");
// 3000번 포트에 서버 생성 및 실행(이미지 제공)
http.createServer(function (request, response) {
response.writeHead(302, {'Location':'http://www.naver.com'});
response.end();
}).listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});