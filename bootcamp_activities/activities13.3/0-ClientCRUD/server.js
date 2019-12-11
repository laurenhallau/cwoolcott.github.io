var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

// Static Directory for css/js/images
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//pass app to routes
require("./routes")(app);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
