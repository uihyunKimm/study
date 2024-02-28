// 모듈을 추출한다.
const fs = require('fs');
// // 모듈을 사용한다.
// const text =fs.readFileSync('textfile.txt', 'utf8', function(error,data) {
//     console.log(data); });
// console.log(text);


// 모듈을 사용한다.

// fs.readFile('./package.json', 'utf8', function(err,data) {
//     console.log(data); });
// console.log('폴더 안의 package.json 파일을 읽도록 요청했습니다.');

// 파일 읽기
try{
const data = fs.readFileSync('textfile123.txt', 'utf8');
console.log(data);
} catch(e){
console.log(e);
}
// 파일 쓰기
try{
fs.writeFileSync('textfile.txt', 'Hello World..!', 'utf8');
console.log('FILE WRITE COMPLETE');
} catch(e){
console.log(e);};

// 파일 읽기
fs.readFile('textfile.txt', 'utf8', function(error, data){
    if(error){
    console.log(error);
    } else{
    console.log(data);
    }
    });
    // 파일 쓰기
    fs.writeFile('textfile.txt', 'Hello World..!', 'utf8', function(error){
    if(error){
    console.log(error);
    } else{
    console.log('FILE WRITE COMPLETE');
    }
    });