const getCookie = function() {
    //로컬에 저장된 모든 쿠키 읽어오기
    const allCookies = document.cookie; //하나의 문자열로 리턴.
    console.log(allCookies);

    //if 조건문 --> 쿠키가 있으면
    if(allCookies != "")
    alert('저장된 쿠키의 값은::'+ allCookies);
    else
    alert('저장된 쿠키가 없습니다.');
}