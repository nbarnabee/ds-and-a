/*  

Check to see if a string is a valid anagram of another string.

Not only do all of the letters need to appear, but they need to appear 
the same number of times.

Time to break out the old reduce mapping.. though I'm using forEach instead 
because it's easier to write.

*/

function isAnagram(s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  const sMap = {};
  const tMap = {};
  sArr.forEach((letter) => (sMap[letter] = (sMap[letter] || 0) + 1));
  tArr.forEach((letter) => (tMap[letter] = (tMap[letter] || 0) + 1));
  for (let letter in sMap) {
    if (sMap[letter] != tMap[letter]) return false;
  }
  return true;
}

/* 

So it tallies up the number of times each letter appears in each word.
Then checks each letter to see if the # of appearances is the same.

I could also include a check at the beginning to return false if the 
strings aren't of equal length.

*/

const test1 = ["race", "care"];
const test2 = ["cat", "rat"];
const test3 = ["acce", "aace"];
