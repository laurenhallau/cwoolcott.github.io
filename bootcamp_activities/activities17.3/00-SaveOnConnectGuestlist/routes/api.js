
const GuestList = require("../models/guestlist.js");


module.exports = function(app) {

  app.post("/api/guests", (req, res) => {
    body = req.body;
    GuestList.create(body)
      .then(dbGuestList => {
        res.json(dbGuestList);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/guests/bulk", (req, res) => {

    console.log(req.body);

    GuestList.insertMany(req.body)
      .then(dbGuestList => {
        res.json(dbGuestList);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/guests", (req, res) => {
    GuestList.find({})
      .sort({ date: -1 })
      .then(dbGuestList => {
        res.json(dbGuestList);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};
