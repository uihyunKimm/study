//JS-Cookie 라이브러리를 활용한 팝업 창 만들기

//각 요소 가져오기
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.banner .btnClose');
const btnConcealWindowToday = document.querySelector('.banner .btnConcealWindowToday');

//페이지 최초 접속시 팝업창 띄우기 --> 주의 --> 쿠키 유무에 따라 노출 비노출 되게 처리
const popupCookie = Cookies.get('popupCookie');
console.log(popupCookie)

//popupCookie 값 유무에 따라 없으면 --> showPopup() 호출해서 팝업창 띄우기
if(popupCookie == undefined)
    showPopup();

//팝업 창 띄우기
function showPopup(){
    popup.style.display = 'block';
}

//닫기 버튼 클릭시
btnClose.addEventListener('click',function(){

    //할 일 처리
    /* popup.style.display="none"; */
    concealPopup(0);
});

//오늘 하루 닫기 버튼 클릭시
btnConcealWindowToday.addEventListener('click',function(){

    //할 일 처리
    /* popup.style.display="none"; */
    concealPopup(1,1);
});

//팝업 창 감추기
function concealPopup(number, expiration){
    /* popup.style.display = 'block'; */
    console.log(number +","+expiration);

    //[닫기] 버튼 클릭시 --> 0
    popup.style.display = 'none';

    //[오늘 하루 창 닫기]버튼 클릭시 --> 1
    if(number === 1){
        //popupCookie 값 체크
        if(Cookies.get("popupCookie")== undefined){
            //쿠키가 없는 경우 --> popupCookie 라는 이름의 쿠키 추가
            Cookies.set('popupCookie','yes',{expires:expiration,path:'/'})
            //yes 쿠키 나오면서 있는 동안은 팝업 안나오게 됨
        }
    }
}



//한 개 쿠키 삭제
const oneDelCookie = function(cname) {
    //할일 처리
    let cval = cname.value;
    console.log(cval);

    Cookies.remove(cval);
    cname.value = "";
    cname.focus();
    alert(`${cval} + 쿠키를 삭제했습니다.`)
}

const form = document.getElementById('form');
    form.addEventListener('submit',oneDelCookie);