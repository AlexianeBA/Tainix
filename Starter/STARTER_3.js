function find_answer(number) {
  if (number % 3 == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

const number = 936;

console.log(find_answer(number));
