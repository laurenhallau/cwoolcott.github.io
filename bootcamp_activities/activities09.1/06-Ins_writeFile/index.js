var fs = require("fs");

fs.writeFile("test.js", JSON.stringify(value), function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
});
