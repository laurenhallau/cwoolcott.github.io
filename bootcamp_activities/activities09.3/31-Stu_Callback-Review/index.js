const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});


// For each element in animal... hint: animalJSON.forEach(function(animal) {})

// Turn the arrays into JSON strings so they can be written to files

// Write to cat.json, write to dog.json hint: fs.writeFile x2