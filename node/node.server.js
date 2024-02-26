const http = require('http');
//http 모듈(함수) 추출 매번 require('~') 형태 불러오기 힘드니 변수에 저장
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello World..!</h1>');
}).listen(3000,function(){console.log('Server running at http://127.0.0.1:3000');});
