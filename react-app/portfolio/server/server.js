const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const index = require("./router/index");
const PORT = 5000;

app.use("/", index);

app.listen(5000, () => console.log(`Server is running on PORT : ${PORT}`));

