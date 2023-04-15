const { linearSearch, mergeSort } = require("./practice.js");

/* Testing linearSearch */

test("should return true", () => {
  expect(linearSearch([1, 2, 3, 4], 2)).toBe(true);
});

test("should return false", () => {
  expect(linearSearch([1, 2, 3, 4], "cat")).toBe(false);
});

/* Testing mergeSort */

test("should return sorted array", () => {
  const result = mergeSort([3, 2, 5, 1, 4]);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

/* Initially I ran into a problem when testing merge() because I used .toBe()
But of course the result of the function call will not be strictly equal to a 
different array.  Duh!

Then I ran into a new problem with mergeSort: 
Jest did not seem to like recursive functions.
But the real problem was that I wasn't exporting it correctly.  Lesson learned!
*/
