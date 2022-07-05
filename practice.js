function copyArray(arr) {
  let returnArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnArray.push(arr[i]);
  }
}
let a = [1, 2, 3];
let b = copyArray;
let y = [...a];
console.log(y, a === y);

console.log(a, b, a === b);
function copyObject(obj) {}
let c = { one: 1, two: 2, three: 3 };
let d = copyObject(c);
console.log(c, d, c === d);

// SPREAD OPERATOR
