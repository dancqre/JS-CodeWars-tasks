
function isIsogram(str){
    //...
    str = str.toLowerCase();
   
    const letterCount = {};
   
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      
      if (letterCount[letter]) {
        return false;
      }
      letterCount[letter] = true;
    }
    
    return true;
  }