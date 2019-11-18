// Classes
class Animal {
  constructor(sound) {
    this.legs = "4";
    this.tail = true;

    this.noise = sound;
    this.tailString = this.tail ? "a tail" : "no tail";
  }

  displayAnimalInfo() {
    console.log(
      `${this.name} says ${this.noise}, he/she also has ${this.legs} legs and ${this.tailString}.`
    );
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

class Fish extends Animal {
  constructor(name) {
    const sound = "Blub";
    super(sound);
    this.name = name;
    this.legs = "0";
  }
}

class Tiger extends Animal {
  constructor(name) {
    super("Roar");
    this.name = name;
  }
}

const mrPants = new Cat("Mr. Pants");
const norm = new Fish("Norm");
const jim = new Tiger("Jim");
const rando = new Animal("bark");
rando.displayAnimalInfo();
