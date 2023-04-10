function factorial(stop) {
  let sum = 0;
  for (let i = 1; i < stop; i++) {
    sum = sum + i;
  }
  return sum;
}
const stop = 100;

console.log(factorial(stop));
