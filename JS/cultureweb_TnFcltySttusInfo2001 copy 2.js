
    //jQuery
    //$(document) - 태그 찾기
    //$('#document')
    const API_KEY = '58764d695a646d6c343949544d634e';
    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/TnFcltySttusInfo2001/1/100/`;
    const url1 = `http://openapi.seoul.go.kr:8088/${API_KEY}//json/culturalEventInfo/1/100/`;
    const localEventList = []; // 정보
    const culturalEventList = []; // 정보
    let lEName, lELatitude, lELongitude, cEName, cELatitude, cELongitude;
    
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {
        // 대여소 정보 가져오기
        let rows = data["culturalEventInfo"]["row"];
        // console.log(rows);
    
    // 정거장, 위도, 경도 저장
        rows.forEach((row) => {
            cEName = row["TITLE"];
            cELatitude = row["LOT"];
            cELongitude = row["LAT"];
            cEaddr = row["PLACE"];
            cEfcl = row["ORG_NAME"];
            cEbgntoend = row["DATE"]
    
          // 정보(stationInfo) 객체 생성
        const cEInfo = {
            cEName : cEName, // 행사명
            cELatitude : cELatitude, // 위도
            cELongitude : cELongitude, // 경도
            cEaddr : cEaddr, // 주소
            cEfcl : cEfcl, // 기관
            cEbgn : cEbgn, // 시작
            cEend : cEend, // 끝
        };
          // 정거장 정보(stationInfo)를 stationList 배열에 추가
          // [{1번 정거장 정보}, {2번 정거장 정보}, {}, ..., {100번 정거장}]
        culturalEventList.push(cEInfo);
        });
        showMap (culturalEventList);
    });
    function showMap(positions) {
        // 이미지 마커 경로
        let imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 이미지 마커 표시

        positions.forEach((item) => {
        let imageSize = new kakao.maps.Size(24, 35);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        // 마커 생성
        let marker = new kakao.maps.Marker({
            // 마커를 표시할 지도
            map: map,
            // 마커를 표시할 위치
            position: new kakao.maps.LatLng(
            item.lELatitude,
            item.lELongitude
            ),
            title: item.lEName, // 마커 타이틀(마우스오버 시, 출력)
            image: markerImage, // 마커 이미지
            });
        let infowindow = new kakao.maps.InfoWindow({
            content: item.lEName // 인포윈도우에 표시할 내용
        });
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        });
        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.open(map, marker);
            };
            }
            
            // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
            function makeOutListener(infowindow) {
            return function() {
                infowindow.close();
            };
            }
            // "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
            function hideMarkers() {
                setMarkers(null);    
            }
}
changeMarker('cE'); // 지도에 커피숍 마커가 보이도록 설정합니다    

function changeMarker(type){
    var select1 = document.getElementById('select1');
    var select2 = document.getElementById('select2');
    
    // 커피숍 카테고리가 클릭됐을 때
    if (type === 'select1') {
    
        // 커피숍 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = 'menu_selected';
        
        // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
        storeMenu.className = '';
        carparkMenu.className = '';
        
        // 커피숍 마커들만 지도에 표시하도록 설정합니다
        setCoffeeMarkers(map);
        setStoreMarkers(null);
        setCarparkMarkers(null);
        
    } else { // 주차장 카테고리가 클릭됐을 때
    
        // 주차장 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = '';
        storeMenu.className = '';
        carparkMenu.className = 'menu_selected';
        
        // 주차장 마커들만 지도에 표시하도록 설정합니다
        setCoffeeMarkers(null);
        setStoreMarkers(null);
        setCarparkMarkers(map);  
    }    
} 

    //     function show_click(obj)
    //     {
    // if (obj.checked) {
    
// }}
// else {
//     showMap(null)
// }


