function squareDigits(num){
  const string = num.toString();
  
  let res = '';
  
  for(i = 0 ; i<string.length; i++){
    const digit = parseInt(string[i]);
    const squared = digit * digit;
    
    res = res + squared;
  }
  
  return parseInt(res);
}