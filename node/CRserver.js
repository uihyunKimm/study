const http = require('http');

//서버 객체 생성
const server = http.createServer();

//포트 설정
const port = 3000;

// function sclose() {
// server.close();
// }
// setTimeout(sclose, 10000);

server.on('request', function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
res.write('<!DOCTYPE html>');
res.write('<html>');
res.write('<head>');
res.write('<title>응답페이지</title>');
res.write('</head>');
res.write('<body>');
res.write('<h1>Node.js</h1>');
res.write('</body>');
res.write('</html>');
res.end();
console.log('Request On');
});

//웹 서버 실행
server.listen(port, function () {
    console.log('웹서버가 시작되었습니다. : %d', port);
    });