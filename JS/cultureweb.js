//jQuery
//$(document) - 태그 찾기
//$('#document')

$(document).ready(function() {
    $('#fullpage').fullpage({
    // options
    autoScrolling:true,
    scrollHorizontally: true,
    // 네비게이션
    navigation : true,
    navigationPosition : 'right',
    // 링크
    anchors:['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'],
    // 배경색
    sectionsColor: ["", "", "green", "blue", "red", "purple"],
    normalScrollElements:".map_wrap", 
    normalScrollElements:".reserv_search",
    }
    );
    });


/*     const API_KEY = '58764d695a646d6c343949544d634e';
    const localEventList = []; // 정보
    let lEName, lELatitude, lELongitude;

// 서울시 데이터 서버에서 데이터 100개 가져오기
fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/xml/TnFcltySttusInfo2001/1/100/`)
.then((response) => response.json())
.then((data) => {
    // 대여소 정보 가져오기
    let rows = data["TnFcltySttusInfo2001"]["row"];
    // console.log(rows);
});
// 정거장, 위도, 경도 저장
    rows.forEach((row) => {
        CLTUR_EVENT_ETC_NM = row["lEName"];
        X_CRDNT_VALUE = row["lELatitude"];
        Y_CRDNT_VALUE = row["lELongitude"];

      // 정거장 정보(stationInfo) 객체 생성
    const leInfo = {
        lEName: lEName, // 정거장명
        lELatitude: lELatitude, // 위도
        lELongitude: lELongitude, // 경도
    };

      // console.log(stationInfo.stationName);

      // 정거장 정보(stationInfo)를 stationList 배열에 추가
      // [{1번 정거장 정보}, {2번 정거장 정보}, {}, ..., {100번 정거장}]
    localEventList.push(leInfo);
    });

    showMap(localEventList);//localEventList - 100개의 정거장에 대한 정보

function showMap(positions) {
    console.log(positions)}; */
    function showMap(positions) {
        console.log(positions);
    let mapContainer = document.getElementById("map");

    // 지도 옵션
    let mapOption = {
    center: new kakao.maps.LatLng(37.5556488, 126.91062927),
    level: 5,
    }};  
    
    let imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 이미지 마커 표시

    positions.forEach((item) => {
    let imageSize = new kakao.maps.Size(24, 35);
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

    /* 
// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(
        item.lELatitud,item.lELongitude),
        title: item.lEName,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
 */