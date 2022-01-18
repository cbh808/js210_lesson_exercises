let shift = array => {
  let removedValue = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let i = 1; i < array.length; i += 1) {
    array[i - 1] = array[i];
  }

  array.length = array.length - 1;
  return removedValue;
};

let count = [1, 2, 3];
console.log(shift(count)); // 1
console.log(count); // [2, 3]

// the above code mutates the array
// In comparison, Array.prototype.shift also mutates