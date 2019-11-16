// Initializing a constructor
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

// Initializing a class definition
class Villian {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
     // Adding a method to the constructor
    greet() {
        return `${this.name} laughs maniacally.`;
    }
}

batman = new Hero("Batman", 10);
joker = new Villian("Joker", 10);

console.log(batman.greet());
console.log(joker.greet());

