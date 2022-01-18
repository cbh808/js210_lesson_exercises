/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.

Examples:
function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5      
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];    // "h"
'hello'[4];    // "o"



Algorithm:

indexOF

- iterate from zero to the (length of the `string` minus length of the substring)
- at each iteration, extract the substring of length substring and compare it to 
the 2nd argument (string we are searching for)
- if equivalent, return index


lastIndexOf:
same as above
if equivalent, assign current index into 'lastIndex' variable.
after iterating over entire string, return 'lastIndex'


*/

function indexOf(firstString, substring) {
  let endIndex = firstString.length - substring.length;

  for (let start_idx = 0; start_idx <= endIndex; start_idx += 1) {
    let tempString = '';

    for (let idx = start_idx; idx < (start_idx + substring.length); idx += 1) {
      tempString += firstString[idx];
      if (tempString === substring) {
        return start_idx;
      }
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1


lastIndexOf:
function lastIndexOf(firstString, substring) {
  let endIndex = firstString.length - substring.length;
  let lastIndex = -1
  for (let start_idx = 0; start_idx <= endIndex; start_idx += 1) {
    let tempString = '';
    for (let idx = start_idx; idx < (start_idx + substring.length); idx += 1) {
      tempString += firstString[idx];
      if (tempString === substring) {
      lastIndex = start_idx;
      }
    }
  }
  return lastIndex
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1