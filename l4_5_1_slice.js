function push(arr, newValue) {
  arr[arr.length] = newValue;
  return arr.length;
}

function slice(array, start, end) {
  result = [];
  for (i = start; i < end; i += 1) {
    push(result, array[i])
  }

  return result;
}


console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]