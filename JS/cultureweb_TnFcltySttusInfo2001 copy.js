
    //$(document) - 태그 찾기
    //$('#document')
    const API_KEY = '58764d695a646d6c343949544d634e';
    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/TnFcltySttusInfo2001/1/100/`;
    const localEventList = []; // 정보
    let lEName, lELatitude, lELongitude;

fetch(url)
.then((response) => response.json())
.then((data) => {
    // 대여소 정보 가져오기
    let rows = data["TnFcltySttusInfo2001"]["row"];
    // console.log(rows);

// 정거장, 위도, 경도 저장
    rows.forEach((row) => {
        lEName = row["CLTUR_EVENT_ETC_NM"];
        lELat = row["X_CRDNT_VALUE"];
        lELng = row["Y_CRDNT_VALUE"];

        // 정거장 정보(stationInfo) 객체 생성
        const lEInfo = {
            lEName : lEName, // 정거장명
            lELatitude : lELat, // 위도
            lELongitude : lELng, // 경도
        };
        // 정거장 정보(stationInfo)를 stationList 배열에 추가
        // [{1번 정거장 정보}, {2번 정거장 정보}, {}, ..., {100번 정거장}]
        localEventList.push(lEInfo);
        });
        showMap (localEventList);
    });

      // 지도 표시 영역
    let mapContainer = document.getElementById("map");

    // 지도 옵션
    let mapOption = {center: new kakao.maps.LatLng(37.5556488, 126.91062927),
        level: 5,
    };
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    let imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    function showMap(positions) {
        console.log(positions);
        positions.forEach((item) => {
            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(item.stationLatitude,item.stationLongitude),
            title: item.stationName,
            clickable: true
            });
            marker.setMap(map);
            marker.setClickable(true);
        })
    };
        
// 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
// 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
// marker.setClickable(true);



// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
// var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// // 인포윈도우를 생성합니다
// var infowindow = new kakao.maps.InfoWindow({
//     content : iwContent,
//     removable : iwRemoveable
// });

// // 마커에 클릭이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'click', function() {
//       // 마커 위에 인포윈도우를 표시합니다
//     infowindow.open(map, marker);  
// });