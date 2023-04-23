/*

This morning I'm challenging myself to write a function that 
shuffles an array in place.  I have vague memories of the 
"Fischer-Yates" shuffle, but would have to look it up to find out 
exactly what it is.

(I seem to recall that you start at the end of the array, and randomly 
  swap each element with one at a more "forward" position)

But rather than look it up, I'm going to implement something and then see 
how it stacks up against my "model" algorithm.


*/

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // I could have gone with Math.random() * i to get a number
    // from 0 to i exclusive, but this way means that there's a chance
    // that the element won't move
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* 

And when I check my notes I see that, yes, I have perfectly recreated 
the Fisher-Yates shuffle.

*/

module.exports = {
  shuffle,
};
