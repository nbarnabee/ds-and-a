/* 
This one taken from devtools.tech:

The task is to implement a tuple function that takes a string as input and converts it into an array of arrays (a tuple).  The tuple should support a function multiple that takes an integer (n), multiples the nth item of each tuple and returns the result.

const item = tuple(input)
item.multiple(position)

Example:
const input = "(1, 2, 3), (4, 5, 6), (7, 8, 9)"

I should be able to do this in 30 minutes.


Going to start with the multiple function.
I'll worry about making it a method later
I made two simple, stupid errors to start:
1. using "item in" rather than "item of"
2. forgetting about the 0th index position, duh.

*/

function multiple(array, num) {
  let result = 1;
  for (let item of array) {
    result *= item[num - 1];
  }
  return result;
}

/* 

Now the conversion.  I like splitting things.
Some questions I'd want to ask:
is the string always going to be in this configuration, 
and will it always contain numbers?
and will those numbers always be integers?

My safest bet would be to split on the the commas.
That will leave me with spaces, though.  I could split and join a couple of times,
though that will make this a bit heavy.

Maybe easiest just to use .trim()
Then we need to remove the parentheses and use the closing parenthesis to trigger 
a new element in the tuple.
*/

function tuple(input) {
  const result = new Array();
  const splitString = input.split(",");
  let i = 0;
  splitString.forEach((element) => {
    trimmedElement = element.trim();
    if (trimmedElement.indexOf("(") !== -1) {
      result[i] = new Array();
      result[i].push(+trimmedElement.replace("(", ""));
    } else if (trimmedElement.indexOf(")") !== -1) {
      result[i].push(+trimmedElement.replace(")", ""));
      ++i;
    } else result[i].push(+trimmedElement);
  });
  result.multiple = function (position) {
    let num = 1;
    for (let item of this) {
      num *= item[position - 1];
    }
    return num;
  };
  return result;
}

// Tests

testInput = "(1, 2, 3), (4, 5, 6), (7, 8, 9)";
testArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
testMultiple = 2 * 5 * 8;

const testResult = tuple(testInput);
console.log(testResult.join("") == testArr.join(""));
console.log(testResult.multiple(2) == testMultiple);

/*  
I wasn't able to get very far with this, because I kept screwing up.
Trying to push items to empty arrays resulted in repeated TypeErrors.

Ah, I see.  Because I was looking for the index value of "(" which was 0
So it was returning false, effectively.  Duh.

Or at least I thought that's what the problem was.  But changing that made no difference.

Running some console.logging indicated that I was getting a lot of false positives.
I think I need to review what indexOf does, exactly, as clearly I had the wrong idea.

According to MDN, the best way to check if a substring is present is to test against -1, 
so that's something I was doing wrong.

And yes that was my problem all along.  So I shouldn't try to be clever.

For testing, I wasn't thinking that you can't really compare arrays, and needed to .join("")
them first.

So it took me quite a lot longer than it should have, but I finally got there.
However, I still haven't put a method on the tuple function.

And since arrays are objects and can hold methods, it really is pretty simple.

All told, this took me twice as long as it should have.  But I learned something, at least.
*/
