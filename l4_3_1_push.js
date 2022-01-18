function push(arr, newValue) {
  arr[arr.length] = newValue;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));
console.log(count);
console.log(count.length);

// the above code mutates the array
// In comparison, Array.prototype.push also mutates