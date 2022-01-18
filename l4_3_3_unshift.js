let unshift = function (arr, newValue) {
  for (let idx = arr.length; idx > 0; idx -= 1) {
    arr[idx] = arr[idx - 1];
  }

  arr[0] = newValue;
  return arr.length;
};

let count = [1, 2, 3];
console.log(unshift(count, 0)); // 4
console.log(count); // [0, 1, 2, 3]

// above function mutates array
// in comparison, Array.prototype.unshift also mutates