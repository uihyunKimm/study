//라이브러리를 이용한 JS 쿠키 - js-cookie

// [1] js-cookie 기본적인 생성법 --> Cookies.set('쿠키명','쿠키값');
Cookies.set('userid','superman1004');

// [2] js-cookie 기본적인 생성법 + 만료일 지정 --> Cookies.set('쿠키명','쿠키값',{expires:7})
Cookies.set('username','superman2',{expires:7});

// [3] js-cookie 기본적인 생성법 + 만료일 지정 --> Cookies.set('쿠키명','쿠키값',{expires:7, path:'/'})
Cookies.set('cname','superman3',{expires:7,path:'/'});

// [4] js-cookie 읽기
const cookie_userid = Cookies.get("userid");
console.log(cookie_userid); //superman1004
console.log(Cookies.get("uasdadas")); //undefined

// [5] js-cookie 모두 읽기
const allCookies = Cookies.get();
console.log(allCookies); //{쿠키명:'쿠키값',쿠키명2:'쿠키값2', ...} => 객체 형태로 리턴
console.log(typeof allCookies);

//[6] js-cookie 삭제
/* Cookies.remove('userid');
const allCookies2 = Cookies.get();
console.log(allCookies2) */

//[6-1] 쿠키 생성시 옵션 지정과 함께 생성되었다면 삭제시에도 --> 똑같이 필요..?
console.clear();
// Cookies.set('dogid','dog1004',{expires:7,path:'/'});
// Cookies.remove('dogid');
// Cookies.remove('dogid',{path:'/'});


//[7] js-cookie 전체 삭제 --> Not possible
//보여지는 쿠키들에 대한 전체 삭제를 한다면?
console.clear();
console.log(Object.keys(Cookies.get())); //쿠키 이름만 가져올 때


Object.keys(Cookies.get()).forEach(function(cName){
    
    //할 일 처리
    let neededOptions = {
        /* domain:"test.com" //이 조건을 넣으면 도메인이 안 맞아서 삭제 안됨 (없으면 전체 삭제) */
        domain:"localhost" //삭제 잘됨 
    };
    Cookies.remove(cName,neededOptions)
});


function allDelCookies (){  //[7]의 완성코드
    Object.keys(Cookies.get()).forEach(function(cName){
        //할 일 처리
        let neededOptions = {
            domain:"localhost"
        };
        Cookies.remove(cName,neededOptions)
    });
    alert("쿠키가 전체 삭제되었습니다.")
}
Cookies.set('catid','cat1004',{expires:7,path:'/study/proj/library_cookie5_js-cookie/'})
// Cookies.remove('catid')
Cookies.remove('catid',{path:'/study/proj/library_cookie5_js-cookie/'});


//[8] userGetCookie 함수 만들기 - 일반적인 For 반복문으로 순회하면서 처리
console.clear();
console.log(document.cookie); //userid=superman1004; username=batman; cname=antman

/* //쿠키 읽기
const getCookie = function(){
    //로컬에 저장된 모든 쿠키 읽어오기
    const allCookies2 = document.cookie; //하나의 문자열로 리턴
    console.log(allCookies2);
}
getCookie('userid'); */
//쿠키 읽기
const userGetCookie = function(cname){
    //로컬에 저장된 모든 쿠키 읽어오기
    
}
console.log('userGetCookie함수로 리턴된 값은 =' + userGetCookie('userid'))

//쿠키 삭제 함수
const delCookie = function (cname) {
    event.preventDefault();

    cname = document.getElementById('cname')
    let cval = cname.value;
    console.log(cval); //userid

    Cookies.remove(cval);
    cname.value ='';
    cname.focus();
    alert(`${cval}쿠키를 삭제하였습니다.`)

}

const form = document.getElementById('form');
form.addEventListener('submit', delCookie);