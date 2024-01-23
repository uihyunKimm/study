//7.문자열
("안녕하세요. 반갑습니다!");
//7-1.비교 연산자 사용 가능 ==

var name = "kitae";
var res1 = name == "kitae";
var res2 = name > "park";
var res3 = name < "apple";

var 인사 = "안녕하세요.";
var 내이름 = "김의현";
console.log(인사.concat("김의현"));
console.log(인사 + 내이름);

//문자열에서 한 글자 가져오기 = 대괄호[]
var 인사 = "안녕하세요ㅋ";
console.log(인사.length);
console.log(인사[5]);

var 암호1 = "지도 속";
var 암호2 = "희망을";
var 암호3 = "훔쳐본다";
var 암호4 = "!?";

console.log(암호1[1] + 암호2[1] + 암호3[1] + 암호4[0]);

//문자열에서 한 글자 가져오기2 =charAt

console.log(
  암호1.charAt(1) + 암호2.charAt(1) + 암호3.charAt(1) + 암호4.charAt(0)
);
console.log(암호2.charAt(1));
console.log(암호3.charAt(1));
console.log(암호4.charAt(0));

//문자열 일부 잘라내기=slice
var 긴문자열 = "이 문자열은 길다";
console.log(긴문자열.slice(2)); //이후로 자름
console.log(긴문자열.slice(2, 5)); //2-5(5-1)까지 자름

//일부 문자열을 다른 문자열로 변경 =replace( , )
var every = "Boys and Girls";
var replace = every.replace("and", "or");
console.log(replace);

//문자열 분할 =split("구분자") 구분자 = 빈칸..
var every = "Boys and Girls";
var sub = every.split(" ");
console.log(sub[0]);
console.log(sub[1] + sub[1] + sub[0] + sub[2]);

//문자열 전체를 대소문자로 바꾸기 =toUpperCase(), toLowerCase();
var 고칠문자열 = "hELlo THERE, How ARE yOu doINg?";
var 소문자 = 고칠문자열.toLowerCase();
var 첫글자 = 소문자[0];
var 첫글자대문자 = 첫글자.toUpperCase();
var 나머지 = 소문자.slice(1);

console.log(첫글자대문자 + 나머지);
