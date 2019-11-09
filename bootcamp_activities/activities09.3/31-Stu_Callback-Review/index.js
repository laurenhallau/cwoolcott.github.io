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

  // For each element in animal... hint: animalJSON.forEach(function(animal) {})

  animalJSON.forEach(function(animal) {
    if (animal.species === "dog") {
      dogs.push(animal);
    } else {
      cats.push(animal);
    }
  });
  // Turn the arrays into JSON strings so they can be written to files

  // const dogJSON = JSON.stringify(dogs, null, 2);
  // const catJSON = JSON.stringify(cats, null, 2););

  // Write to cat.json, write to dog.json hint: fs.writeFile x2

  fs.writeFile("cat.json", cats, function(err) {
    console.log("Wrote to Cat FILE");
  });

  fs.writeFile("dog.json", dogs, function(err) {
    console.log("Wrote to Dog FILE");
  });
});
