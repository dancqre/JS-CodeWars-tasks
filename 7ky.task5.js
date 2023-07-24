function friend(friends){
  //your code here
  let newArray = []
  for(let names of friends){
    if (names.length === 4) {
      newArray.push(names)
    } 
  }
  return newArray;
}