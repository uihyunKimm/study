
    //jQuery
    //$(document) - 태그 찾기
    //$('#document')


    const API_KEY = '58764d695a646d6c343949544d634e';
    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalSpaceInfo/1/100/`;
    const culturalSpaceList = []; // 정보
    let SLName, SLsubjCode, SLclsDay, SLaddr, SLhmPage;

fetch(url)
.then((response) => response.json())
.then((data) => {
    // 대여소 정보 가져오기
    let rows = data["culturalSpaceInfo"]["row"];
    // console.log(rows);

// 정거장, 위도, 경도 저장
    rows.forEach((row) => {
        SLName = row["FAC_NAME"];
        SLsubjCode = row["SUBJCODE"];
        SLclsDay = row["CLOSEDAY"];
        SLaddr = row["ADDR"];
        SLhmPage = row["HOMEPAGE"];

      // 정거장 정보(stationInfo) 객체 생성
    const SLInfo = {
        SLName : SLName, // 정거장명
        SLsubjCode : SLsubjCode, // 위도
        SLclsDay : SLclsDay, // 경도
        SLaddr : SLaddr, // 경도
        SLhmPage : SLhmPage, // 경도
    };
      // 정거장 정보(stationInfo)를 stationList 배열에 추가
      // [{1번 정거장 정보}, {2번 정거장 정보}, {}, ..., {100번 정거장}]
    culturalSpaceList.push(SLInfo);
    });
    showList(culturalSpaceList);
});
// HTML 태그 찾기
const Name = document.querySelector("#section3 .place_container .place_item .place_content .place_content_title");
const SubC = document.querySelector("#section3 .place_container .place_item .place_content .place_content_subjcode");
const ClDay = document.querySelector("#section3 .place_container .place_item .place_content .place_content_date");
const Addr = document.querySelector("#section3 .place_container .place_item .place_content .place_content_addr");
const HmPg = document.querySelector("#section3 .place_container .place_item .place_content .place_content_hompage");
// HTML 태그에 데이터 넣기

function showList(data) {
    data.forEach((a) => {
    let boardTbody = document.querySelector(".boardTbody");
    let tr = `<tr class="boardTbTr">
    <td>${a.SLName}</td>
    <td colspan="2" class="boardTbTitle">
    ${a.SLclsDay}
    </td>
    <td>${a.SLaddr}</td>
    <td>${a.SLhmPage}</td>
    </tr>`;
    boardTbody.innerHTML += tr;
    });
    }
function showMap(positions) {
    
    console.log(positions);}


// const weatherImg = document.querySelector("#weather .wImg");

