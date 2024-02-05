
    //jQuery
    //$(document) - 태그 찾기
    //$('#document')
    const API_KEY = '58764d695a646d6c343949544d634e';
    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/TnFcltySttusInfo2001/1/100/`;
    const localEventList = []; // 정보
    let lEName, lELatitude, lELongitude, lEaddr, lEfcl, lEbgntoend;
    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
            center: new kakao.maps.LatLng(37.50221, 126.82926), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
            };
        
            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            var map = new kakao.maps.Map(mapContainer, mapOption); 

    function select1_click(obj){
        if (obj.checked) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // 대여소 정보 가져오기
            let rows = data["TnFcltySttusInfo2001"]["row"];
            // console.log(rows);
        
        // 정거장, 위도, 경도 저장
            rows.forEach((row) => {
                lEName = row["CLTUR_EVENT_ETC_NM"];
                lELatitude = row["Y_CRDNT_VALUE"];
                lELongitude = row["X_CRDNT_VALUE"];
                lEaddr = row["BASS_ADRES"];
                lEfcl = row["EVENT_FCLTY_NM"];
                lEbgn = row["EVENT_PD_BGNDE"]
                lEend= row["EVENT_PD_ENDDE"];
        
            //정보(stationInfo) 객체 생성
            const lEInfo = {
                lEName : lEName, // 행사명
                lELatitude : lELatitude, // 위도
                lELongitude : lELongitude, // 경도
                lEaddr : lEaddr, // 주소
                lEfcl : lEfcl, // 기관
                lEbgn : lEbgn, // 시작
                lEend : lEend, // 끝
            };
              // 정거장 정보(stationInfo)를 stationList 배열에 추가
              // [{1번 정거장 정보}, {2번 정거장 정보}, {}, ..., {100번 정거장}]
            localEventList.push(lEInfo);
            });
            showMap (localEventList);
        });
        
        function showMap(positions) {
            console.log(positions);
            // 지도 표시 영역
            let mapContainer = document.getElementById("map");
            // 지도 옵션
            let mapOption = {
            center: new kakao.maps.LatLng(37.50221, 126.82926),
            level: 6,
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
    }else {
        null;
        }};
