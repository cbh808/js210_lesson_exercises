function missing(arr) {
  fullArray = [];
  result = []
  min = arr[0];
  max = arr[arr.length - 1];
  fullArrayLength = (max - min + 1);

  for (let value = min; value <= max; value += 1) {
    fullArray.push(value);
  }

  for (let i = 0; i < fullArrayLength; i += 1) {
    if (!(arr.includes(fullArray[i]))) {
      result.push(fullArray[i]);
    }
  }

  return result;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []