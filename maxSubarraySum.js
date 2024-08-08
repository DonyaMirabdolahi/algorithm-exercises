function maxSubarraySum(arr, num) {
    if (arr.length < num) return null; 
  
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < num; i++) {
      windowSum += arr[i];
    }
    
    maxSum = windowSum; 
  

    for (let i = num; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - num];
      maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
  }
  

  console.log(maxSubarraySum([100, 200, 300, 400], 2));
  console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 201, 4], 4));
  console.log(maxSubarraySum([-3, 4, 0, -2, 6, -11, 2], 3));
  console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 11, 2], 5));
  console.log(maxSubarraySum([2, 3], 3)); 
  