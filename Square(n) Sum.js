function squareSum(numbers) {
  let sum = 0;
  numbers.forEach(function(number) {
    sum += number ** 2;
  });
  return sum;
}