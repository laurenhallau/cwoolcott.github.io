var fs = require("fs");

fs.appendFile("test.js", process.argv[2] + "\n", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
});
