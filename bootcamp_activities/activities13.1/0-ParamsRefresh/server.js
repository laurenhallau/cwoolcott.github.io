var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Root
app.get("/", function(req, res) {
  res.send("Navigate to a page and Paragraph");
});

//With Optional Params
app.get("/:page?/:paragraph?", function(req, res) {
  let pageNumber = parseInt(req.params.page);
  let paragraphNumber = parseInt(req.params.paragraph);
  let result;

  if (pageNumber && paragraphNumber) {
    result =
      "You are on page <b>" +
      pageNumber +
      "</b> and paragraph <b>" +
      paragraphNumber +
      "</b>";
  } else if (pageNumber) {
    result = "You are on page <b>" + pageNumber + "</b>";
  } else {
    result = "Can't Find that page";
  }

  res.send(result.toString());
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
