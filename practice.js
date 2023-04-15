/* LINEAR SEARCH */

function linearSearch(arr, target) {
  for (let element of arr) {
    if (element == target) return true;
  }
  return false;
}

/* I was trying to use forEach initially but did not realize
(or possibly had forgotten), that it iterates
over indexes.  Although... no that still 
doesn't make sense, since I got the correct values in console.log().
Weird...
*/

/*  MERGE SORT */

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

/* Remember what we're doing here:
breaking each array down into a sorted subarray.
An array of length 0 or 1 is sorted by its very nature.
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = {
  linearSearch,
  mergeSort,
};
