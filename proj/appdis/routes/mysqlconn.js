const mysql = require("mysql2");

// connection 객체 생성
const connection = mysql.createConnection({
  user: "root",
  password: "root",
  database: "userrDB",
  port: 3306,
});

module.exports = connection;
