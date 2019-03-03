var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL = "mysql://g5w8syji9d7fymbx:v2rkqphr0rbjr6tc@y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ba63fzx71xxu9f2t") {
  connection = mysql.createConnection(process.env.JAWSDB_URL = "mysql://g5w8syji9d7fymbx:v2rkqphr0rbjr6tc@y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ba63fzx71xxu9f2t");
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.connect();
module.exports = connection;
