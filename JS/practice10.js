// 연산자 변경시 마지막에 입력한 연산자를 기준으로 계산
// 숫자패드의 가로 길이보다 큰 값을 입력하거나 큰 값의 결과가 나오면 자동으로 가로 스크롤 생성
// 합계값을 기준으로 재연산 가능

let screen = document.querySelector("#screen");
let btn = document.getElementsByClassName("btnBox");
let str = ""; // 연산자가 포함된 수식
let chk = eval(str);
let numSum = ""; // 클릭한 숫자
let defaultColor = "rgb(9, 9, 9)";

function clickNum(num) {
  let pickNum = num.innerHTML; // 선택된 값

  // screen의 값이 0일때, 0을 또 클릭한 경우
  // 숫자 추가 안함
  if (screen.innerHTML == "0" && pickNum == "0") {
    screen.innerHTML = "0";
  } else if (screen.innerHTML == "0" && pickNum == "00") {
    screen.innerHTML = "0";
  } else {
    // 0이 아닌 다른 숫자를 클릭한 경우
    numSum = "";
    str += pickNum;
    numSum = pickNum;

    console.log("2: " + numSum);
    screen.style.color = defaultColor;

    // screen에 클릭한 숫자 추가
    screen.innerHTML = numSum;
  }
}

function clickOperator(pick) {
  let operator = pick.innerHTML;

  // C/CE버튼 클릭시 초기화
  if (operator == "C/CE") {
    screen.style.color = defaultColor;
    str = "";
    numSum = "";
    screen.innerHTML = "0";
  }
  //연산자 입력시 바로 중간 합계값을 표시
  else if (
    operator == "%" ||
    operator == "/" ||
    operator == "*" ||
    operator == "-" ||
    operator == "+"
  ) {
    screen.innerHTML = eval(str);
    screen.style.color = defaultColor;
    numSum = "";
    str += operator;
  }
  // [=] 선택 시 최종 합계값 출력
  // 최종 합계값 색상 빨간색으로 변경
  // = 입력 후
  //  1. 숫자 입력시 최종합계값의 마지막자리에 해당 숫자가 추가됨
  //  2. 문장 부호 입력 시 최종합계값을 기준으로 새로운 연산 시작
  else if (operator == "=") {
    screen.style.color = "rgb(199 32 32)";
    screen.innerHTML = eval(str);
    numSum = "";
    str = eval(str);
  } else if (operator == "⬅️") {
    numSum = numSum.substring(0, numSum.length - 1);
    console.log("잘라낸값: " + numSum);

    str = str.substring(0, str.length - 1);
    screen.innerHTML = eval(numSum);
  }
}
