fetch(
  "http://openapi.seoul.go.kr:8088/58764d695a646d6c343949544d634e/json/bikeList/1/5/"
  )
  .then((response) => response.json())
  .then((data) => {
    let rows = data["rentBikeStatus"]["row"];
    rows.forEach((row) => {
    let stationName = row["stationName"];
    console.log(stationName);
    });
})
  .catch((error) => console.log(error));