const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
const obj2 = { a: 1, b: 2, c: { d: 3, f: 5 } };
const keys = ['c', 'd'];
console.log(partialDeepEquals(obj1, obj2, keys)); // true
