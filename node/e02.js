// //1
// const os = require('os');

// console.log('시스템의 hostname : %s', os.hostname());
// console.log('시스템의 총 메모리 : %d', os.totalmem());
// console.log('시스템의 사용 가능 메모리 : %d', os.freemem());
// console.log('시스템의 CPU정보 :');
// console.log(os.cpus());
// console.log('시스템의 네트워크 인터페이스 정보');
// console.log(os.networkInterfaces());

// //2
// const myURL3 = new URL('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
// console.log(myURL3.searchParams)
// console.log(myURL3.searchParams.get('query'));
// console.log(myURL3.searchParams.get('sm'));

//3
// // path 모듈 추출
// const path = require('path');
// // 디렉터리 이름 합치기
// let directories = ["Users", "mike", "docs"];
// let docsDirectory = directories.join(path.sep);
// console.log('문서 디렉터리 : %s', docsDirectory);
// // // 디렉터리 이름과 파일 이름 합치기
// let curPath = path.join('/Users/mike', 'notepad.exe');
// console.log('파일 경로 : %s', curPath);
// // 경로에서 디렉터리, 파일 이름, 확장자 구별하기
// let filename = "C:\\Users\\mike\\notepad.exe";
// let dirname = path.dirname(filename);
// let basename = path.basename(filename, '.exe');
// let extname = path.extname(filename);
// console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);

//4
const fs = require('fs');

const myName = '김의현';
fs.readFile('output.txt','utf8',function(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

fs.writeFile('output.txt',`내 이름은 ${myName} 입니다?`,'utf8',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('파일 쓰기 : output.txt 파일에 데이터 쓰기 완료');
    }
})
