class Character {
  // Create constructor method  with (name, strength, hitPoints)
  
  // assign to this (ie: this.name = name)
  
  
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`); // Done for you
    console.log(`Each attack will do *STRENGTH* damage.`); // TODO
    console.log(`*NAME* has *HITPOINTS* hit points remaining!`);// TODO
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {}

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

// ie: const characterBob = new Character("Bob", 30, 75);




// Create an interval that alternates attacks every 2000 milliseconds
 // If either character is not alive, end the game
