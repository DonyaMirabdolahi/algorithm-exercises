function minSubArrayLen(arr, target) {
    let start = 0;
    let windowSum = 0;
    let minLength = Infinity; 
  
    for (let end = 0; end < arr.length; end++) {
      windowSum += arr[end];
  
      while (windowSum >= target) {
        minLength = Math.min(minLength, end - start + 1);
        windowSum -= arr[start];
        start++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  

  console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); 
  console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); 
  console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 191, 52], 52));
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 101, 39], 51));
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 101, 55], 95)); 
  console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 31, 11], 7));
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 101, 95], 100)); 
  