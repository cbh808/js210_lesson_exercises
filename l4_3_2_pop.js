function pop(array) {
  if (array.length === 0) {
    return undefined;
  }

  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}

let count = [1, 2, 6];
console.log(pop(count));
console.log(count);

// the above code mutates the array
// In comparison, Array.prototype.pop also mutates