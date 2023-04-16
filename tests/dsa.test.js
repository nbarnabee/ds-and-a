const { linearSearch } = require("../ds&a_problems/linearSearch.js");
const { binarySearch } = require("../ds&a_problems/binarySearch.js");

test("linearSearch should return correct index or failure message", () => {
  expect(linearSearch([1, 2, 3], 2)).toBe(1) &&
    expect(linearSearch([1, 2, 3], "cat")).toBe("Item not found.");
});

test("binarySearch should return true or false", () => {
  expect(binarySearch([1, 2, 3], 2)).toBe(true) &&
    expect(binarySearch([1, 2, 3], "cat")).toBe(false);
});
