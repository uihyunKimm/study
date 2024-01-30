
// API KEY
const API_KEY = "a0262f5f6c4872b7995069bb62ced791";

navigator.geolocation.getCurrentPosition((position) => {
  // position : 위치 정보를 담은 객체
  console.log(position);
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  }, () => {
  console.log("위치를 찾을 수 없습니다.");
  });

  // API 호출 경로
const url = `https://api.openweathermap.org/data/2.5/weather?
lat=${37.5259136}&lon=${126.8514816}&appid=${API_KEY}&units=metric`;

// URL 처리
fetch(url)
.then((response) => response.json())
.then((data) => {
  // HTML 태그 찾기
const weatherImg = document.querySelector("#weather .wImg");
const weather = document.querySelector("#weather .temp");
const info = document.querySelector("#weather .info");
const city = document.querySelector("#weather .city");
// HTML 태그에 데이터 넣기
weatherImg.src = "이미지";
weather.innerHTML = `${Math.ceil(data.main.temp)}°C`;
info.innerHTML = `${data.weather[0].main}`;
city.innerHTML = data.name;
}, () => {
console.log("위치를 찾을 수 없습니다.");
});