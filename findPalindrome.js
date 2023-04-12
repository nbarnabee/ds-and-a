/* 
Let's find a palindrome!

Basically we want to see if the first half of a string matches the second 
half.  So we cut it in half, reverse the second half, combine and compare.

This would have a time complexity of O(n), since for each additional 
string character, I'd have to do one more operation (a bunch of times, but 
  remember that 2n or 3n or 4n, etc., is expressed as simply n)

I'll just cut the string in half.  
In the case of a string with an odd length, I have a choice about the 
central character: it can either be included in both halves or included in 
neither.

If I don't want the central character included, then the cut-off point 
for the front half should be determined with Math.floor() and the starting 
point for the second half should be determined with Math.ceil()

If I want the central character included, then do the opposite.

When in doubt, just remember that one needs to be Math.ceil() and the other Math.floor()
*/

function isPalindrome(str) {
  let frontHalf = str.slice(0, Math.floor(str.length / 2));
  let backHalf = str
    .slice(Math.ceil(str.length / 2))
    .split("")
    .reverse()
    .join("");
  return frontHalf == backHalf;
}

let str1 = "calf";
let str2 = "dog";
let str3 = "anna";
let str4 = "tacocat";

/*  

Thinking about this later, I realized two things:
1. My solution was overly complicated.
I could have simply reversed the entire string and compared the results.
(My solution might be a little more performant, however, as I'm only dealing with half of the string.)

2. I didn't take capitalization into account.

*/

function isPalindrome2(str) {
  const revStr = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() == revStr;
}
