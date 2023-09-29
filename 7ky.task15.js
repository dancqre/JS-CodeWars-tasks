function XO(str) {
    //code here
  let x = 0;
  let o = 0;
  for (const i of str){
    if(i === "o" || i === "O"){
      o += 1;
    }
    if(i === "x" || i === "X"){
      x += 1;
    }
  }
  return x === o;
}