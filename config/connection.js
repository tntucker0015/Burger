// Set up MySQL connection.
var mysql = require("mysql");

var connection:
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection (process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'fw1hor87d2w1q5h8',
    password: 'n78a0b79rb7wdivg',
    port: '3306',
    database: 'j6573un9fucx1deg',
  })
}
// = mysql.createConnection({
//   host: "localhost",
//   port: process.env.Port || 3306,
//   user: "root",
//   password: "",
//   database: "burger_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;