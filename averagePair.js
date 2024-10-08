function averagePair(arr, targetAvg) {
    if (arr.length === 0) return false;
  
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let avg = (arr[start] + arr[end]) / 2;
      if (avg === targetAvg) {
        return true;
      } else if (avg < targetAvg) {
        start++;
      } else {
        end--;
      }
    }
    return false;
  }
  
  console.log(averagePair([1, 2, 3], 2.5)); 
  console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
  console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
  console.log(averagePair([1, 4], 3));
  