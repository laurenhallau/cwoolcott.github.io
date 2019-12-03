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
  console.log("connected as id " + connection.threadId + "\n");
  createSong();
});

function createSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO song SET ?",
    {
      title: "Fifths",
      artist: "DeadMau5",
      genre: "House"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateSong() {
  console.log("Updating all Hip-Hop...\n");
  var query = connection.query(
    "UPDATE song SET ? WHERE ?",
    [
      {
        genre: "Old School"
      },
      {
        genre: "Hip-hop"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all House...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      genre: "House"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query(
    "SELECT * FROM songs WHERE ?",
    {
      genre: "Old School"
    },
    function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    }
  );
}
