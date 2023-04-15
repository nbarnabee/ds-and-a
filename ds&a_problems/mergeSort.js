/* 
So we're breaking down an array into arrays of length 0 or 1, then building them back up.

Interesting to note that this reminds me of the merging linked lists that I put in yesterday; it's the same sort of process.

*/

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
    return [...sortedArr, ...left, ...right];
  }
}

/* The use of ..left, and ...right might seem weird, but recall that 
the sorting process will strip away the lower numbers, and eventually 
one array will be empty and all of the remaining values in the other 
array will necessarily be larger -- AND they will be sorted.
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/* 
The number of operations will always be the same.
The time complexity is O(n log(n)), aka linearithmic time

O(log n) is logarithmic time: Every time the input size is doubled, the number of operations increases by one.

The extra N that comes up here is due to the merge helper function, which has 
to make roughly 1 comparison for each array element -- so O(n) time
*/
