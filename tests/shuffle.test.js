const { shuffle } = require("../practice_problems/shuffle.js");

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("arrays should not be equal", () => {
  let testResult = new Array(...testArr);
  expect(shuffle(testResult).join("")).not.toEqual(testArr.join(""));
});

// Although, technically, there is a chance that the arrays
// could be the same, and it wouldn't be a failure of the function.

test("function should return different results", () => {
  let testResult1 = new Array(...testArr);
  let testResult2 = new Array(...testArr);
  expect(shuffle(testResult1).join("")).not.toEqual(
    shuffle(testResult2).join("")
  );
});

// Again, TECHNICALLY, there's a chance that they could be the same.
// This would be more likely if I was testing smaller arrays...
// Given that, it's difficult to know how to automate this test.
