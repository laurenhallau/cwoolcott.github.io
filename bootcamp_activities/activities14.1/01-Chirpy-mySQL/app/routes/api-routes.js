// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps Route
  app.get("api/all", function (req, res) {
    var sql = "SELECT * FROM chirps";

    connection.query(sql, function (err, results) {

      if (err) throw err;

      res.json(results);

    })

  })

  // Add a chirp Route

  app.post("/api/new", function (req, res) {
    var sql = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";
    connection.query(sql, [req.body.author, req.body.body, req.body.created_at], function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);

    })
  });




};
