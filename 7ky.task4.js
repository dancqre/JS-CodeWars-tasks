function openOrSenior(data){
  // ...
  
  const categories  = []; 
  
  for (const [years, handicap] of data){
    if ( years >= 55 && handicap > 7){
      categories.push('Senior');
    }else categories.push('Open');
  }
  
  
  return categories;

}
