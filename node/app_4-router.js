const express = require('express');
const app = express();

// 라우터 연결
const indexRouter = require('./routes');// 폴더를 읽었을 때 무조건 index이름을 가진 파일을 먼저 읽음
const userRouter = require('./routes/user');

app.get("/", indexRouter);
app.get("/user", userRouter);



app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});