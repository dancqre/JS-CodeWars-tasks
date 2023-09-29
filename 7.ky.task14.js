function filter_list(l) {
  // Return a new array with the strings filtered out
  let rez = []
  for (const item of l) {
  if(typeof item === 'number') rez.push(item);
  
  } 
  return rez;
}