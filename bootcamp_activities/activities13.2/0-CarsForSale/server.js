// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Static Directory for css/js/images
app.use(express.static('public'))

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var carsForSale = [
  { year: "1993", make: "Mazda", model:"Rx-7",  price: 30000, image: "mazda.jpg"},
  { year: "2001", make: "Ferrari", model:"Modena",  price: 120000, image: "ferrari.jpg"},
  { year: "2015", make: "Bugatti", model:"Veyron",  price: 1700000, image: "bugatti.jpg"},
  { year: "2019", make: "Bentley", model:"Mulsanne",  price: 305000, image: "mulsanne.jpg"},
];

// Routes
app.get("/carsforsale/:model", function(req, res) {
  for (var i = 0; i < carsForSale.length; i++) {
    if (carsForSale[i].model === req.params.model) {
      return res.render("car", carsForSale[i]);
    }
  }
});

app.get(["/","/carsforsale"], function(req, res) {
  res.render("allcars", { carsForSale: carsForSale });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
