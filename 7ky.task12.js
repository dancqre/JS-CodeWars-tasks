function descendingOrder(n){
  //...
  const sortedDigits = n.toString().split('').sort((a, b) => b - a);
  const result = parseInt(sortedDigits.join(''), 10);

  return result;
}