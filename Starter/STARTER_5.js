function sum_sup_egal(values) {
  let sum = 0;
  values.forEach(function (value) {
    if (value >= 5) {
      sum = sum + value;
    }
  });
  return sum;
}
const values = [
  2, 5, 4, 6, 6, 2, 3, 2, 4, 7, 7, 6, 6, 5, 5, 4, 1, 5, 6, 9, 3, 4, 6,
];
console.log(sum_sup_egal(values));
