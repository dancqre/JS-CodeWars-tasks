function sumDigits(number) {
  const numberStr = Math.abs(number).toString();

  let sum = 0;

  for (let i = 0; i < numberStr.length; i++) {
    sum += parseInt(numberStr[i], 10); 
  }

  return sum;
  
}