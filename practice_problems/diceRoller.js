/*  
The problem:  write a function that simulates the roll of a pair of six-sided 
dice and return the sum.

(I can immediately see a path to something more interesting: input the number 
  and size of the dice... but we'll stick with the basic for now..)

This is extremely straightforward:  generate two random numbers between 1 & 6 
(inclusive) and add them together.
But it's been so long since I worked with Math.random() that I do have to look 
up the pattern.  Oops!

Here's a primer:

Remember that Math.random() returns a number between 0 and 1 (exclusive)

Math.floor(Math.random() * (max - min + 1) + min);
would return an integer from MIN to MAX, inclusive of both

Math.floor(Math.random() * (max - min) + min);
would return an integer from MIN to MAX, excluding MAX

Math.floor(Math.random() * max);
would return an integer from 0 to MAX, excluding MAX

Math.floor(Math.random() * max + 1);
would return an integer from 0 to MAX, inclusive

So in this case I would want
Math.floor(Math.random() * (max - min + 1) + min);
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// My helper function is good for everything.

function twoDSixes() {
  let x = getRandom(1, 6);
  let y = getRandom(1, 6);
  return x + y;
}

// That works, so let's make it more interesting.

function diceRoller(number, sides) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    result += getRandom(1, sides);
  }
  return result;
}

module.exports = {
  twoDSixes,
  diceRoller,
  getRandom,
};
