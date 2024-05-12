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
    let name = cname + '=';
    console.log(name); //userid=

    let allCookies = document.cookie.split(';'); //한 칸 띄어쓰기 주의
    console.log(allCookies)

    //encodeURIComponent는 자바스크립트에서 string을 UTF-8로 인코딩해주는 함수.
    //decodeURIComponent는 encodeURIComponent로 esxape된 문자열을 다시 원래의 문자열로 리턴해주는 함수
    // 비슷한 메서드 --> encodeURI, decodeURI, escape, unescape

    let cval = [];
    for(let i=0; i<allCookies.length; i++){
        console.log(allCookies[i].trim().indexOf(name));
        //indexOf 메서드의 리턴값 --> 배열일 경우 --> 검색된 항목의 index값.
        //문자열일 경우 --> 검색된 문자열의 첫 글자의 index값.
        //검색결과가 없을 경우 --> -1리턴
    }
}
console.log('userGetCookie함수로 리턴된 값은 =' + userGetCookie('userid'));




//[9] forEach 메서드를 활용한 userGetCookie2 함수 만들기
console.clear();
console.log(document.cookie);//username=batman; cname=antman; userid=superman1004; 
const userGetCookie2 = function(cname){
    //1.객체변수 선언
    let cookie = {}; //{username:"batman"; cname:"antman",userid:"superman1004"} <-- 이렇게 저장시키려고

    //2. 반복처리 - forEach
    document.cookie.split(';').forEach(function(el){
        /* el = el.trim(); //위에서 공백 제거를 처리하지 않고 여기서 한다면..
        console.log(el)  */

        let [k,v] = el.split('=');//username, _(공백)cname,_(공백)userid
        console.log(k)//(k.trim()); //공백 제거를 여기서 할 수도 있다

        cookie[k.trim()]=v;//bat
        console.log(cookie)
    });
    //return cookie[cname];//antman
    return (cookie[cname] != undefined)?cookie[cname]:"no result";//예외처리
}
console.log('userGetCookie2함수로 리턴된 값은 =' + userGetCookie2('cname'));




//[10] ES6버전으로 userGetCookie3 함수 만들기
console.clear();
console.log(document.cookie);//username=batman; cname=antman; userid=superman1004;

const userGetCookie3 =function(cname){
    //1.cname 수정
    cname = cname+'='; //userid=

    //2.문자열(쿠키명) 찾기
    const str= document.cookie;
    const isCookieIdx = str.indexOf(cname);
    /* boolean isCookie = str.contains(cname);//Java에서는 contains()사용 -->대신 --> indexOf() 메서드 사용. */
    console.log(isCookieIdx); // cname 검색시 --> ?? 17이 반환

    //3. 쿠키 가져와서 분리 --> 처리
    let result = 'no result';
    if(isCookieIdx >= 0){
        //할 일 처리
        result=document.cookie //username=batman; cname=antman; userid=superman1004;
        .split(';')
        .find (item => item.startsWith(cname))//특정 문자열로 시작하는지를 체크 --> true 반환, 아니면 false. IE는 Edge부터
        .split('=')[1];
        console.log(isCookieIdx);
    }
    return result;
}
console.log('userGetCookie3 함수로 리턴된 값은 ='+userGetCookie3('userid'))

function showCval(cname){
    const rst = document.getElementById('cval');
    rst.textContent = userGetCookie3(cname);
    //rst.value 로 하면 안되는 이유 div에 넣기 때문에 div,span 에는 textContent로
}
function clearCval(cname){
    const rst = document.getElementById('cval');
    rst.value = '';
    //rst.value 로 하면 안되는 이유 div에 넣기 때문에 div,span 에는 textContent로
}

