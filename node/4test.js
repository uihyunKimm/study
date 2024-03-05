
// 모듈 추출 및 서버 생성
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, response) => {
    response.render("4test",{title: 'Test'})
});

app.post('/', (request, response) => {
    let paramName = request.params.name;
    let paramAge = request.params.age;
    let dae;
    if (10 <= paramAge <= 19){
        dae = "10대";
    }else if(paramAge <= 29){
        dae = "20대";
    }else {
        dae = `${paramAge}대`
    }
    
    response.send("<h1>안녕하세요.</h1>" + paramName + "<h1>입니다!</h1><br>");
    response.send("<h1>저는</h1>" + dae + "<h1>입니다</h1>");
});

app.listen(3000,function () {
    console.log("Server Running at http://127.0.0.1:3000");
})