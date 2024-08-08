function isSubsequence(s1, s2) {
    let i = 0; 
    let j = 0;
  
    while (j < s2.length) {
      if (s1[i] === s2[j]) {
        i++; 
      }
      j++; 
      if (i === s1.length) {
        return true;
      }
    }
  
    return false;
  }
  

  console.log(isSubsequence('hello', 'hello world'));
  console.log(isSubsequence('sing', 'sting')); 
  console.log(isSubsequence('abc', 'abracadabra')); 
  console.log(isSubsequence('abc', 'acb'));