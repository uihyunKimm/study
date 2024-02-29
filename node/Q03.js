const express = require('express');
const app = express();

app.get("/a", (request, response) => {
    response.send('<a href="/b">go to B</a>');
})
app.get("/b", (request, response) => {
    response.send('<a href="/a">go to A</a>');
})


app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});