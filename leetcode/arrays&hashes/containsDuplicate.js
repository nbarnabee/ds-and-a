/*  

Take an array of number and return true if it contains a duplicate number, 
or false if each element is unique.

I can immediately think of a "cheaty" way to do this with sets, but I could 
also iterate over the array and check indexOf against the current index.

The most difficult thing about this problem was remembering whether I was 
supposed to be returning "true" or "false"!

*/

function containsDuplicateCheeky(arr) {
  const set = new Set(arr);
  return set.size != arr.length;
}

function containsDuplicateByIndex(arr) {
  for (index in arr) {
    if (arr.indexOf(arr[index]) != index) return true;
  }
  return false;
}

test1 = [1, 2, 3, 4];
test2 = [1, 1, 2, 3];
