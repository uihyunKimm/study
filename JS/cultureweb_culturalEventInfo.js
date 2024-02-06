
    //jQuery
    //$(document) - 태그 찾기
    //$('#document')
    const culturalEventList = []; // 정보
    let cEName, cELatitude, cELongitude, cEaddr, cEfcl, cEbgntoend;
        

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
            center: new kakao.maps.LatLng(37.50221, 126.82926), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
            };
        
            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            var map = new kakao.maps.Map(mapContainer, mapOption); 
    function select2_click(obj){
        if (obj.checked) {
        fetch(`http://openapi.seoul.go.kr:8088/58764d695a646d6c343949544d634e/json/culturalEventInfo/1/100/`)
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
                cEfcl = row["ORG-NAME"];
                cEbgn = row["STRTDATE"];
                cEend = row["END_DATE"];
        
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
            culturalEventList.push(cEInfo);
            });
            showEvent(culturalEventList);
        });
        
        function showEvent(positions) {
            console.log(positions);
            // 지도 표시 영역
            let mapContainer = document.getElementById("map");
            // 지도 옵션
            let mapOption = {
            center: new kakao.maps.LatLng(37.5939491407769, 127.054890960564),
            level: 5,
            };
        
            // 지도를 표시할 div와 지도 옵션으로 지도를 생성
            let map = new kakao.maps.Map(mapContainer, mapOption);
        
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
                    item.cELatitude,
                    item.cELongitude
                    ),
                    title: item.cEName, // 마커 타이틀(마우스오버 시, 출력)
                    image: markerImage, // 마커 이미지
                    });
                let infowindow = new kakao.maps.InfoWindow({
                    content: item.cEName // 인포윈도우에 표시할 내용
                });
                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
                });
        }
        
        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
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
    }};
