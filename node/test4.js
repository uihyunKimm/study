
// 모듈 추출 및 서버 생성
const express = require('express');
const path = require('path');
const app = express();

// view 엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render("test4-input")
});

app.post('/', (request, response) => {
    let name = request.body.Name;
    let age = request.body.Age;
    
    response.render("test4-result", { 
        name: name,
        age: age
    });
});

// app.post('/', (request, response) => {
//     let name = request.body.name;
//     let age = request.body.age;
    
//     response.send("<h1>안녕하세요.</h1>" + name + "<h1>입니다!</h1><br>");

//     if (30 <= age < 40) {
//         dae = "30대";
//     response.send("<h1>저는" + dae + "입니다</h1>");
//     }else if (20 <= age < 30){
//         dae = "20대";
//         response.send("<h1>저는" + dae + "입니다</h1>");
//     }else if (10 <= age < 20){
//         dae = "10대";
//         response.send("<h1>저는" + dae + "입니다</h1>");
//     }else {
//         response.send("<h1>저는" + age + "세 입니다</h1>");
//     }
// });

app.listen(3000,function () {
    console.log("Server Running at http://127.0.0.1:3000");
});