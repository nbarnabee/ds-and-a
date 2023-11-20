/*

Binary search of a sorted array of numbers.  Note that I am just coming up on 
this on my own, after thinking about how merge sort works, so it might not 
be the "best" way to implement this.

The process seems to be the same.

This function takes an array and a target value and returns true or false depending on if the array contains the value.

As with the mergeSort, we're just cutting the array in half over and over again.

*/

function binarySearch(arr, target) {
  if (arr.length === 1) return arr[0] === target;
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));
  if (target < right[0]) return binarySearch(left, target);
  else if (target === right[0]) return true;
  else return binarySearch(right, target);
}

/* Note that this really only makes sense for huge data sets, 
as opposed to just doing .indexOf() which is a linear search

A proper binary search has a time complexity of O(log n)
*/

module.exports = {
  binarySearch,
};
