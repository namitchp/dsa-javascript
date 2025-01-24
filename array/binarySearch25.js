class Solution {
  binarSearch(arr, t) {
    let l = 0;
    let r = arr.length - 1;
    // debugger;
    let mid;
    while (r>=l) {
        mid = l + Math.floor((r - l) / 2);
      if (arr[mid] == t){
        return mid;
     }
      if (arr[mid] < t) {
        l = mid+1;
      }

      if (arr[mid] > t) {
        r = mid-1;
      }
    }

    return -1;
  }
}

const solutionClass = new Solution();
const arr = [1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 23, 24];
console.log(solutionClass.binarSearch(arr, 23));
