
# chirpy schema
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);

# The Sequel to MySQL

### Links
http://docs.sequelizejs.com/en/latest/

### Sequelize
Sequelize is a premade ORM that simplifies database queries in Node applications, allowing us to do complex data management with simple JavaScript methods.

### Route Refresher

  // Get all Route Example
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM table";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

 // Post Route Example
  app.post("/api/new", function(req, res) {
    console.log("Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO table (col1, col2, col3) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.somevalue1, req.body.somevalue2, req.body.somevalue3], function(err, result) {
      if (err) throw err;
      console.log("Inserted Data");
      res.end();
    });
  });

### Route with Sequelize

  // Get all Sequelize Route Example
  app.get("/api/all", function(req, res) {
    // Finding all data, and then returns them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use the .then function
    Chirp.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

    // Post Sequelize Route Example

    app.post("/api/new", function(req, res) {

        console.log("Data:");
        console.log(req.body);

        Chirp.create({
          col1: req.body.somevalue1,
          col2: req.body.somevalue2,
          col3: req.body.somevalue3
        }).then(function(results) {
          console.log("Inserted Data");
          res.end();
        });

    });


### jQuery AJAX Refresher

// AJAX grab and display all Example
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("someclass");

      row.append("<p>" + data[i].col1 + "</p>");
      row.append("<p>" + data[i].col2 + "</p>");
      row.append("<p>" + data[i].col3 + "</p>");

      $("#container").prepend(row);

    }

  }

});

// Send an AJAX POST-request with jQuery Example

$.post("/api/new", jsonData)
.then(function() {

  var row = $("<div>");
  row.addClass("someclass");

  row.append("<p>" + jsonData.col1 + "</p>");
  row.append("<p>" + jsonData.col2 + "</p>");
  row.append("<p>" + jsonData.col3 + "</p>");

  $("#container").prepend(row);

});

### Steps for Sequelize CLI

CREATE DATABASE ‘database_development’;

SequelizeQuickStartGuide.PDF and Sequelize CLI Skeleton

Update Package.json to include additional Dependencies

Run ‘npm Install’

Run ‘sequelize init:config & sequelize init:models’

Update DB Password in config.json

Create user.js Model in model folder

Add db require and ‘db.sequelize.sync().then…’ code to server.js

Run server.js



