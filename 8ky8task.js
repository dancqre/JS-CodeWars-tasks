function fakeBin(x){
  let rez = '';
  for (i = 0; i < x.length; i++){
    if(x[i] < 5){
    rez += 0;
    }else {
      rez +=1
    } 
  }
  return rez;
}