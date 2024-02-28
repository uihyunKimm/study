
// 모듈 추출
const fs = require("fs");
const http = require("http");
// 서버 생성 및 실행
http.createServer(function (request, response) {
// HTML 파일을 읽기
fs.readFile("HTMLPage.html", function (error, data) {
response.writeHead(200, { "Content-Type": "text/html" });
response.end(data);
});
}).listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});