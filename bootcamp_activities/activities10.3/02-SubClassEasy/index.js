
// Classes
class Animal {
  constructor(sound) {
    this.legs = "4";
    this.tail = true;
    this.sound = sound;
    this.tailString = this.tail ? "a tail" : "no tail";
  }

  displayAnimalInfo(){
    console.log(`${this.name} says ${this.sound}, he/she also has ${this.legs} legs and ${this.tailString}.`);
  }
}

// Sub Classes
class Cat extends Animal {
  constructor(name) {

    const sound = "Meow";
    super(sound);
    this.name = name;
  }
}


const mrPants = new Cat("Mr. Pants");
mrPants.displayAnimalInfo();



