function Algo() {}

Algo.prototype.reverse = function(str) {};

Algo.prototype.isPalindrome = function(str) {};

Algo.prototype.capitalize = function(str) {
  return str.split(" ").map(word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  }).join(" ");
};

module.exports = Algo;
