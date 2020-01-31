
// Basic Convert to Fat Arrow
var getDigits = function(name, phoneNumber) {
	console.log (name + " has a phone number of " + phoneNumber);
}

var getDigits = (name, phoneNumber) => {
  console.log (name + " has a phone number of " + phoneNumber);
}

console.log(getDigits("Chris","555-555-5555"));

//Convert to Fat Arrow without brackets and Return

var getRide = function(year, make, model){
	return "You want a " + year + " " + make + " " + model;
}

var getRide = (year, make, model) => "You want a " + year + " " + make + " " + model;

console.log(getRide("1986","Toyota", "Supra"))

// Convert to Fat Arrow without Parens,Brackets and return
var tinyRick = function(name){
	return "I'm Tiny " + name + "!";
}

var tinyRick = (name) => "I'm Tiny " + name + "!";

console.log(tinyRick("Rick"))

// Convert CB to Fat Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filter = (arr, cb) => {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var oddNumbers = filter(numbers, (currentElement) => currentElement % 2 === 1);

console.log(oddNumbers);

