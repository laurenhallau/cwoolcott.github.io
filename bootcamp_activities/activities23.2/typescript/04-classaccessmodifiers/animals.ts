//Add appropriate access modifier to:
// animalName in Animal: public, private, or protected 
//// meowSound in Cat: public, private, or protected 
// Create Dog derived/extended class with a dogSound variable and a method of bark() that uses it
// Create a dog instance and Call the new dog class' sound method

export { }

class Animal {
    animalName: string;

    constructor(name: string) {
        this.animalName = name
    }
    move() {
        console.log(`${this.animalName} Moves`);
    }

    eat() {
        console.log(`${this.animalName} eats.`);
    }
}

class Cat extends Animal {

    meowSound: string = "meeooww";

    constructor(animalName: string) {
        super(animalName);
    }
    meow() {
        console.log(`${this.animalName} says ${this.meowSound}`);
    }
}

let mrPants = new Cat("Mr.Pants");
mrPants.eat();
mrPants.meow();
