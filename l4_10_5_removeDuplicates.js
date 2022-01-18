function uniqueElements(arr) {
  result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!(result.includes(arr[i]))) {
      result.push(arr[i]);
    }
  }

  return result;
}

array = [1, 2, 4, 3, 4, 1, 5, 4]
console.log(uniqueElements(array));  // returns [1, 2, 4, 3, 5]
console.log(array);