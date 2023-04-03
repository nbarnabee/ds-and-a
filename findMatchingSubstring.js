/* 
The problem: given two strings, find the length of the longest matching substring. 

e.g, given strings "dogcatbirdfish" and "dogcatturtle", 
the function should return 6 (length of the substring "dogcat")

I'm sure I have done something like this before; the first thing that comes to mind is a brute force approach using nested loops.  For each i, compare string1[i] to string2[i] and keep track of how many times they match.  If a match isn't found, record the "maximum", wipe the count and begin again at [i+1]

*/

function longestSubstring(string1, string2) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] == string2[i]) {
      current += 1;
    } else {
      if (current > max) max = current;
      current = 0;
    }
  }
  return max;
}

let string1 = "dogcatbirdfish";
let string2 = "dogcatturtle";

/* Works for that, but I have a weird feeling that I'm forgetting something.

And, indeed, it's okay if the match is at the start, but remember that I'm looking for a match ANYWHERE in the second string, which is why I need a nested loop.

*/

function longestSubstring2(string1, string2) {
  let max = 0;
  let current = 0;
  let k = 0;
  for (let i = 0; i < string1.length; i++) {
    k = i;
    for (let j = 0; j < string2.length; j++) {
      if (string1[k] == string2[j]) {
        // as long as we're getting matches, we'll advance through the strings
        current += 1;
        ++k;
      } else {
        // otherwise we reset and move to the next letter in string2
        if (current > max) max = current;
        current = 0;
        k = i;
      }
    }
  }
  return max;
}

// As a nested loop, this function has a BigO of O(n^2)

// Just for fun, what if we want the substring returned...

function returnLongestSubstring(string1, string2) {
  let max = 0,
    current = 0,
    k = 0,
    startSubstring = 0,
    endSubstring = 0;
  for (let i = 0; i < string1.length; i++) {
    k = i;
    for (let j = 0; j < string2.length; j++) {
      if (string1[k] == string2[j]) {
        current += 1;
        ++k;
      } else {
        if (current > max) {
          max = current;
          startSubstring = i;
          endSubstring = i + max;
        }
        current = 0;
        k = i;
      }
    }
  }
  return string1.slice(startSubstring, endSubstring);
}
