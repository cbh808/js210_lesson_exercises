function push(arr, newValue) {
  arr[arr.length] = newValue;
  return arr.length;
}

function concat(arr1, arr2) {
  let newArray = [];
  let extract = array => {
    for (let idx = 0; idx < array.length; idx +=1) {
      push(newArray, array[idx]);
    }
    return 1;
  };
  extract(arr1);
  extract(arr2);
  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]