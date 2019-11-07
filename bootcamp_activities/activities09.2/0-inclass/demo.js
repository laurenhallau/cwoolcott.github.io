var function1 = function(name) {
  console.log("HI " + name + "!");
};

function1("Chris");

var function2 = name => {
  console.log(name);
};

function2("Bob");

var function3 = function() {
  console.log("Hi There");
};

var function5 = greeting => greeting + " There!";

var function5a = () => {
  console.log(function5("HELLO"));
  console.log("Hi There");
};

var add = (num1, num2) => num1 + num2;

newGreeting = function5("HI");
console.log(newGreeting);

var object = {
  function1: sdf => {
    console.log("This");
  }
};

object.function1("TEST");
console.log(add(4, 6));

name = "Bob";

var isName = firstName => (name === "Sam" ? "Yes The Name" : "Not the Name");

console.log(isName("Sam"));

const menu = [
  { item: "coffee", calories: 10 },
  { item: "fries", calories: 400 },
  { item: "cheeseburger", calories: 700 }
];

const veganMenu = ["kale", "grass", "leaf"];

menuItems = menu.map(menuItem => {
  return menuItem.item;
});
console.log(menuItems);

veganMenu.forEach(function(menu) {
  console.log("Its the " + menu + "");
});

const soda = ["Pepsi", "Fanta", "Coke"];

const betterSoda = soda.filter(eachSoda => {
  return eachSoda.startsWith("P");
});

console.log(betterSoda);

const str = "Are you going to the mall today?";
console.log(str.startsWith("you", 4)); //Value and Position
