    const API_KEY = '58764d695a646d6c343949544d634e';
    const localEventList = []; // 정보
    let lEName, lELatitude, lELongitude;

// 서울시 데이터 서버에서 데이터 100개 가져오기
fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/xml/TnFcltySttusInfo2001/1/100/`)
.then((response) => response.json())
.then((data) => {
    // 대여소 정보 가져오기
    let rows = data["TnFcltySttusInfo2001"]["row"];
    console.log(rows);
});
// // 정거장, 위도, 경도 저장
//     rows.forEach((row) => {
//         CLTUR_EVENT_ETC_NM = row["lEName"];
//         X_CRDNT_VALUE = row["lELat"];
//         Y_CRDNT_VALUE = row["lELng"];

//       // 정거장 정보(stationInfo) 객체 생성
//     const leInfo = {
//         lEName: lEName, // 정거장명
//         lELatitude: lELat, // 위도
//         lELongitude: lELng, // 경도
//     };

//       // console.log(stationInfo.stationName);

//       // 정거장 정보(stationInfo)를 stationList 배열에 추가
//       // [{1번 정거장 정보}, {2번 정거장 정보}, {}, ..., {100번 정거장}]
//     localEventList.push(leInfo);
//     });

//     showMap(localEventList);//localEventList - 100개의 정거장에 대한 정보

// function showMap(positions) {
//     console.log(positions)};
//     let mapContainer = document.getElementById('map'), // 지도를 표시할 div  
//     mapOption = { 
//         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };

// let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
// // 마커를 표시할 위치와 title 객체 배열입니다 

// // 마커 이미지의 이미지 주소입니다
// let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
// for (let i = 0; i < localEventList.length; i ++) {
//     // 마커 이미지의 이미지 크기 입니다
//     var imageSize = new kakao.maps.Size(24, 35); 
//     // 마커 이미지를 생성합니다    
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: (localEventList[i].lElng, localEventList[i].lElat), // 마커를 표시할 위치
//         title : localEventList[i].lEName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });
// }