// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();

// //포트설정
// app.set('port', process.env.PORT || 3000);
// app.listen(app.get('port'), function(){
//     console.log("Express server listening on " + app.get('port'))
// });

// // 미들웨어 사용
// app.use(function(request, response, next) {
// console.log('미들웨어에서 요청을 처리함.');
// response.send("<h1>Express 서버에서 응답한 결과입니다.</h1>");
// });
// app.listen(3000, function(){
// console.log("Server Running at http://127.0.0.1:3000");
// });


// 미들웨어 설정1
app.use(function(request, response, next){
console.log("첫 번째 미들웨어");
next();
});

//미들웨어 설정2
app.use(function(request, response, next){
console.log("두 번째 미들웨어");
next();
});

//미들웨어 설정3
app.use(function(request, response, next){
console.log("세 번째 미들웨어");
});
app.listen(3000, function(){
console.log("Server Running at http://127.0.0.1:3000");
});