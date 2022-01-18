function substrings(firstString, substring) {
  let endIndex = firstString.length - substring.length;
  let result = [];
  for (let start_idx = 0; start_idx <= endIndex; start_idx += 1) {
    let tempString = '';

    for (let idx = start_idx; idx < (start_idx + substring.length); idx += 1) {
      tempString += firstString[idx];
      if (tempString === substring) {
        result.push(start_idx);
      }
    }
  }
  return result
}

function indexOf(firstString, substring) {
  let result = substrings(firstString, substring);
  return result.length !== 0 ? result[0] : -1;
}

function lastIndexOf(firstString, substring) {
  let result = substrings(firstString, substring);
  return result.length !== 0 ? result[result.length - 1] : -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1