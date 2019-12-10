var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set("view engine", "hbs");

var gameOfThrones = [
  {
    name: "Daenerys",
    house: "Targaryen",
    houseImage: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/25/1466688518-sigil-of-house-targaryen.jpg?resize=480:*"  
  }, {
    name: "Sansa",
    house: "Stark",
    houseImage: "https://i.ytimg.com/vi/6BdY6sKQLHo/maxresdefault.jpg"
  }, {
    name: "Cersei",
    house: "Lannister",
    houseImage: "https://i.ytimg.com/vi/rcgBNyy2Pls/maxresdefault.jpg"
  }, {
    name: "Tyrion",
    house: "Lannister"
  }
];

var data = {
  gameOfThrones: gameOfThrones
};

app.get("/", function(req, res) {
  res.render("index", data);
});

app.get("/:name", function(req, res) {
  //Gets Object from property
  let index = gameOfThrones.findIndex(thisCharacter => thisCharacter.name.toLowerCase() === req.params.name.toLowerCase());
  
  // Does name exist
  if (index > -1){
    res.render("house", gameOfThrones[index]);
  }
  else{
    res.render("index", data);
  }
  
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
