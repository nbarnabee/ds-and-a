const {
  twoDSixes,
  diceRoller,
  getRandom,
} = require("../practice_problems/diceRoller.js");

// Oh, how should I test this?
// I guess it will always need to return a number between 2 and 12 (inc)

test("should return between 2 and 12", () => {
  for (let i = 0; i < 50; i++) {
    expect(twoDSixes()).toBeGreaterThanOrEqual(2) &&
      expect(twoDSixes()).toBeLessThanOrEqual(12);
  }
});

// nice

// Ok, this test is a little more interesting.
// The min number will always equal the number of dice
// The max number will = number * sides
// Heck, let's use my getRandom

test("should return a number within the bounds", () => {
  for (let i = 0; i < 50; i++) {
    testNum = getRandom(1, 20);
    testSides = getRandom(1, 20);
    expect(diceRoller(testNum, testSides)).toBeGreaterThanOrEqual(testNum) &&
      expect(diceRoller(testNum, testSides)).toBeLessThanOrEqual(
        testNum * testSides
      );
  }
});
