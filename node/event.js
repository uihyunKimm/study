// // process 객체에 exit 이벤트 연결
// process.on('exit', function(){
//     console.log('안녕히가세요^^');
//     });
//     // process 객체에 uncaughtException 이벤트 연결
//     process.on('uncaughtException', function(error){
//     console.log('예외가 발생했습니다!!');
//     });
//     // 2초 간격으로 3번 예외를 발생시킨다
//     let count = 0;

const { error } = require("console");

//     function test() {
//     count = count + 1;
//     if(count > 3) { return; }


//     // 예외를 강제로 발생시킨다
//     setTimeout(test, 2000);
//     error.error.error();
//     };
//     setTimeout(test, 2000);

// //이벤 연결 개수 제한 메서드
// process.setMaxListeners(15);

// // 이벤트 연결
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });
// process.on('exit', function(){ });

// process.on("uncaughtException", function(error){
//     console.log("예외 발생! 한번 봐줌!");
// })
// //이벤트 제거
// process.removeListener('uncaughtException', onUncaughtException);

// //2초 간격으로 예외 발생
// function test(){
//     setTimeout(test, 2000);
//     error.error.error();
// }

// setTimeout(test, 2000);

process.on('exit', function(){
    console.log('안녕히가세요^^');
});
process.emit('exit');
process.emit('exit');
process.exit();
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중')