/* 
A simple linear search that returns the index position of the target number, 
or "item not found" if it isn't in the array.
Time complexity of O(n) (because in the worst case, it will have to check 
  every element of the array.

  Note that the test initially failed because the index value is returned 
  as a string.  Interesting.  And good to know.
*/

function linearSearch(arr, target) {
  for (let index in arr) {
    if (arr[index] == target) return +index;
  }
  return "Item not found.";
}

module.exports = { linearSearch };
