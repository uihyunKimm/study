//데이터타입: 문자열 > x
//const name = "김의현";
//name = "Jv";
//console.log(name);

//데이터타입: 객체, 배열, 함수 경우 o
//const name2 = {10, 20, 30};
//name2 = {40, 50};
//console.log(name2);

//객체 정의
const obj1 = { name: "UK", age: 20 };
console.log(obj1);

//속성 값 변경
obj1.age = 30;
console.log(obj1);

// 속성 값 추가
obj1.address = "seoul";
console.log(obj1);

const arr1 = ["dog", "cat"];
console.log(arr1);
//arr1 변수의 값을 변경할 수 있는지??

arr1[0] = "bird";
console.log(arr1);

const man = 1 + 3;
console.log(man);
const candy = 8;
console.log(candy);
console.log(candy / man);

var 일분은몇초 = 60;
var 한시간은몇분 = 60;
var 한시간은몇초 = 일분은몇초 * 한시간은몇분;
console.log(한시간은몇초);

var 하루는몇시간 = 24;
var 하루는몇초 = 한시간은몇초 * 하루는몇시간;
console.log(하루는몇초);

let 키 = 165;
let 제한 = 150;
console.log(키 >= 제한);

let 비밀숫자 = 5;
let 뽀로로추측 = 3;
console.log(비밀숫자 === 뽀로로추측);

let 루피추측 = 5;
console.log(비밀숫자 === 루피추측);

let 문자열숫자 = "5";
let 진짜숫자 = 5;
console.log(문자열숫자 === 진짜숫자); //완전히 똑같은지(데이터 타입까지)
console.log(문자열숫자 == 진짜숫자);

//삼항연산자
//형식: 조건 ? true : false
let x = 5;
let y = 3;
let big = x > y ? "안녕" : "바보"; //x
console.log(big); //5
