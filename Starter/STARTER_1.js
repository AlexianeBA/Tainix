function calc_perimeter(side) {
  return side * 4;
}

function calc_area(side) {
  return side * side;
}

const side = 54;
const resultat = calc_perimeter(side) + calc_area(side);
console.log(resultat);
