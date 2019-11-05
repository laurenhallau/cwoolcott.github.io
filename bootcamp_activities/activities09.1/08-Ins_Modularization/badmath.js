var pie = "apple";

var predictable = function() {
  return 1;
};
var multiply = function(value1, value2) {
  console.log(value1 * value2);
};

var sum = function(num1, num2) {
  console.log(num1 + num2);
};
obj = {
  name: "BOB"
};

// module.exports is an object we use to store variables or methods
module.exports = {
  pie: pie,
  sum: sum,
  multiply: multiply,
  predictable: predictable
};
