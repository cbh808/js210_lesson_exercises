function copyProperties(object1, object2) {
  let keys = Object.keys(object1);
  keys.forEach( key => object2[key] = object1[key]);
  return keys.length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }