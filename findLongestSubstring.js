 function findLongestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let seen = {};
  
    for (let end = 0; end < str.length; end++) {
      let char = str[end];
  
      if (seen[char] >= start) {
        start = seen[char] + 1;
      }
  
      seen[char] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  

  console.log(findLongestSubstring('')); 
  console.log(findLongestSubstring('rithmschool'));
  console.log(findLongestSubstring('thisisawesome'));
  console.log(findLongestSubstring('thecatinthehat'));
  console.log(findLongestSubstring('bbbbbb')); 
  console.log(findLongestSubstring('longestsubstring')); 
  console.log(findLongestSubstring('thisishowwedoit'));
  