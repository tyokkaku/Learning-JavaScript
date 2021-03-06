function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}
const coefficients = {
  a: 1,
  c: 3,
};
// #@@range_begin(list1)
const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    if(!/^[0-9]$/.test(key)) return target[key] || 0;
  return target[key] || 0;
  },
});

console.log(betterCoefficients.a); // 1
console.log(betterCoefficients.b); // 0
console.log(betterCoefficients.c); // 3
console.log(betterCoefficients.d); // 0
console.log(betterCoefficients.z); // 0
console.log(betterCoefficients.anything); // undefined
console.log(evaluate(5, betterCoefficients)); // 76  ← 1 + 0 + 3*(5*5) 
// #@@range_end(list1)
