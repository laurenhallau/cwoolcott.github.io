var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

var html;

//Root
app.get("/", function(req, res) {
  html = "<h1>Navigate to the page and paragraph</h1>";
  res.send(html);
});

//With Optional Params
app.get("/:page?/:paragraph?", function(req, res) {
  let pageNumber = parseInt(req.params.page);
  let paragraphNumber = parseInt(req.params.paragraph);

  if (pageNumber && paragraphNumber) {
    html =
      "You are on page <b>" +
      pageNumber +
      "</b> and paragraph <b>" +
      paragraphNumber +
      "</b>";
  } else if (pageNumber) {
    html = "You are on page <b>" + pageNumber + "</b>";
  } else {
    html = "Can't Find that page";
  }

  res.send(html);
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
