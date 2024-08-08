function areThereDuplicates() {
    let frequencyCounter = {};
    for (let i = 0; i < arguments.length; i++) {
      let value = arguments[i];
      if (frequencyCounter[value]) {
        return true;
      } else {
        frequencyCounter[value] = 1;
      }
    }
    return false;
  }
  console.log(areThereDuplicates(1, 2, 3)); 
  console.log(areThereDuplicates(1, 2, 2));
  console.log(areThereDuplicates('a', 'b', 'c', 'a'));
  
// *******************
  function areThereDuplicates() {
    let args = Array.from(arguments);
    args.sort((a, b) => a > b);
  
    let start = 0;
    let next = 1;
  
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
  }
  
  // Examples:
  console.log(areThereDuplicates(1, 2, 3)); 
  console.log(areThereDuplicates(1, 2, 2)); 
  console.log(areThereDuplicates('a', 'b', 'c', 'a'));
  