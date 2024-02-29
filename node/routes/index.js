const express = require('express');
//router 객체 생성
const router = express.Router();

//페이지 라우트
router.get('/', function(require, response) {
    response.send("<h1>Index Page</h1>");
});

//모듈화
module.exports = router;