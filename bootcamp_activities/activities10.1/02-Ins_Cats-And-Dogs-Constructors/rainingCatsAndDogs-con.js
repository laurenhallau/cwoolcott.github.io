// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise, horn) {
  this.raining = raining;
  this.noise = noise;
  this.legs = 4;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
  this.hurts = function() {
    if (horn) {
      console.log("Ouch!");
    } else {
      console.log("No hurty.");
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!", false);
var cats = new Animal(false, "Meow!", false);
var pigs = new Animal(true, "Oink!", false);
var unicorn = new Animal(true, "neigh!!!!", true);
// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);
