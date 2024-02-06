
    //jQuery
    //$(document) - 태그 찾기
    //$('#document')

    const PublicReservationList = []; // 정보
    let PrName, PrState, PrPlc, PrAddr, PrTgt;


function showBoard(){
    fetch('http://openapi.seoul.go.kr:8088/58764d695a646d6c343949544d634e/json/ListPublicReservationCulture/1/100/')
    .then((response) => response.json())
    .then((data) => {
        // 대여소 정보 가져오기
        let rows = data["ListPublicReservationCulture"]["row"];
        // console.log(rows);
        rows.forEach((row) => {
            PrName = row["SVCNM"];
            PrState = row["SVCSTATNM"];
            PrPlc = row["PLACENM"];
            PrAddr = row["AREANM"];
            PrTgt = row["USETGTINFO"];

        // 정거장 정보(stationInfo) 객체 생성
        const PrInfo = {
            PrName : PrName,
            PrState : PrState,
            PrPlc : PrPlc,
            PrAddr : PrAddr,
            PrTgt : PrTgt
        }
        PublicReservationList.push(PrInfo);
        });
        showList(PublicReservationList);
    })
    };
function showList(data) {
    data.forEach((a) => {
    let boardTbody = document.querySelector("#boardTbody");
    console.log("sss : " + boardTbody)
    let tr = `<tr class="boardTbTr">
    <td id="boardTbTitle">
    ${a.PrName}
    </td>
    <td>${a.PrState}</td>
    <td>${a.PrPlc}</td>
    <td>${a.PrAddr}</td>
    <td>${a.PrTgt}</td>
    </tr>`;
    boardTbody.innerHTML += tr;
    });
    }


// const weatherImg = document.querySelector("#weather .wImg");

