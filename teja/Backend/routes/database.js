var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
    database: "hrms"
});

con.connect(function(err) {
  if (err) throw err;
  else
  console.log("Connected!");
});

module.exports = con;