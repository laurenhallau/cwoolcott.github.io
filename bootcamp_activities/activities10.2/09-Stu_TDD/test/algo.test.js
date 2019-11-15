const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {});

  describe("isPalindrome", () => {
    it("should return a new 'Palindrome' object", () => {
      const typical = "TACOCAT";
      const obj = new Algo().isPalindrome(typical);

      expect(obj).toEqual(true);
    });
    it("should return a new 'Palindrome' object", () => {
      const typical = "RACECAR";
      const obj = new Algo().isPalindrome(typical);

      expect(obj).toEqual(true);
    });
  });

  describe("capitalize", () => {});
});
