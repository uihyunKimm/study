//모듈 추출 및 서버 생성
const express = require("express");
const path = require("path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function (request, response) {
response.render("basic");
});
// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});