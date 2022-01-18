// use slice to create new array
function push(arr, newValue) {
  arr[arr.length] = newValue;
  return arr.length;
}

function splice(array, start, len) {
  spliced_arr = []
  for (let idx = start; idx < array.length; idx += 1) {
    if (idx < (start + len)) {
      push(spliced_arr, array[idx])
    }
    array[idx] = array[idx + len]
  }

  array.length = array.length - len
  return spliced_arr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]