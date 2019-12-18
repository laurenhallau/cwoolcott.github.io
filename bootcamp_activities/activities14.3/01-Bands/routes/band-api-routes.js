var db = require("../models");

module.exports = function (app) {
  app.get("/api/bands", function (req, res) {
    // 1. Add a join to include all of each Band's Songs
    db.Band.findAll({
      include: [db.Song]
    }).then(function (dbBand) {
      res.json(dbBand);
    });
  });

  app.get("/api/bands/:id", function (req, res) {
    // 2; Add a join to include all of the Band's Songs here
    db.Band.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Song]
    }).then(function (dbBand) {
      res.json(dbBand);
    });
  });

  app.post("/api/bands", function (req, res) {
    db.Band.create(req.body).then(function (dbBand) {
      res.json(dbBand);
    });
  });

  app.delete("/api/bands/:id", function (req, res) {
    db.Band.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBand) {
      res.json(dbBand);
    });
  });

};
