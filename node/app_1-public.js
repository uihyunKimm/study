const express = require('express');
const app = express();

app.use(express.static(__dirname + "/Public"));

app.use(function (req, res) {
    res.send('<img src="/coffee.jpg" width="100%"/>');
});

app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});