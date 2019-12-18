// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the songs
  app.get("/api/songs", function (req, res) {
    var query = {};
    if (req.query.band_id) {
      query.BandId = req.query.band_id;
    }
    // 1. Add a join here to include all of the Bands to these songs
    db.Song.findAll({
      where: query,
      include: [db.Band]
    }).then(function (dbSong) {
      res.json(dbSong);
    });
  });

  // Get route for retrieving a single song
  app.get("/api/songs/:id", function (req, res) {
    // 2. Add a join here to include the Band who wrote the Song
    db.Song.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Band]
    }).then(function (dbSong) {
      console.log(dbSong);
      res.json(dbSong);
    });
  });

  // POST route for saving a new song
  app.post("/api/songs", function (req, res) {
    db.Song.create(req.body).then(function (dbSong) {
      res.json(dbSong);
    });
  });

  // DELETE route for deleting songs
  app.delete("/api/songs/:id", function (req, res) {
    db.Song.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbSong) {
      res.json(dbSong);
    });
  });

  // PUT route for updating songs
  app.put("/api/songs", function (req, res) {
    db.Song.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbSong) {
        res.json(dbSong);
      });
  });
};
