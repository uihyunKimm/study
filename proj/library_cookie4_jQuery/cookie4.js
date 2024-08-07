//라이브러리를 이용한 JS 쿠기 -JQuery Cookie
//다른 자바스크립트 쿠키 관련 라이브러리들도 사용법은 비슷하다. 그러나 똑같진 않다


//쿠키 읽기
const getCookie = function() {
    //로컬에 저장된 모든 쿠키 읽어오기
    const allCookies = document.cookie; //하나의 문자열로 리턴.
    console.log(allCookies);

    //if 조건문 --> 쿠키가 있으면
    if(allCookies != ''){
    alert('저장된 쿠키의 값은::'+ allCookies);}
    else{
    alert('저장된 쿠키가 없습니다.');}
}
//[1] 쿠키 생성 --> JQuery Cookie 라이브러리 사용
$.cookie('userid','superman1004');

//[2] 쿠키 생성 --> 만료일 지정
$.cookie('username','batman',{expires:7}); //7일 만료일

//[3] 쿠키 생성 --> 만료일 지정 및 패스 지정 --> '/' 지정시 사이트 전체에서 쿠키 유효.
$.cookie('uid','antman',{expires:7, path:'/'}); //주의! --> 삭제시에도 패스 지정 필요.

//[4] 쿠키 읽기
console.log($.cookie('userid')); //superman1004
console.log($.cookie('asd')); //undefined

//[5] 모든 쿠키 읽기
console.log($.cookie()); //{cname:"cvalue",cname2:"cvalue2"...} 객체 형태로 보여줌

//[6] 쿠키 삭제하기
console.log($.removeCookie('userid')); // true, false 로 값 반환됨 //true
console.log($.removeCookie('asdf')); // false

//[7] 쿠키 생성시 domain, path 지정과 함께 생성되었다면 삭제시에도 --> 똑같이 필요
console.clear();
$cookie('dogid','dd1234',{expires:7, path:'/'});
console.log($.removeCookie('dogid')); //path가 지정되지 않아서 >>  false
console.log($.removeCookie('dogid',{path:'/'})); // true
