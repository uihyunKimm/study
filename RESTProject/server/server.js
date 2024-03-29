const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const index = require("./router/index");

// body-parser 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", index);

app.listen(5000, () => console.log("127.0.0.1:5000"));