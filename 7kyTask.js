//Your code goes here
Array.prototype.sum = function() {
  if (this.length === 0) {
    return 0;
  } else {
    return this.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  }
};