var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  showSongs();
});

function afterConnection() {
  let sql = "SELECT * FROM songs WHERE genre = 'Hip-Hop'";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log(res);
    //  connection.end();
  });
}

function showSongs() {
  let sql = "SELECT * FROM songs";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log(res);
    //  connection.end();
  });
}
