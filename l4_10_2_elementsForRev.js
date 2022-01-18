function elementsAllAndReversed(arr) {
  return arr.concat(arr.slice().reverse());
}

let digits = [4, 8, 15, 16, 23, 42];


console.log(elementsAllAndReversed(digits));    // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]
digits[0] = 3
console.log(elementsAllAndReversed(digits));