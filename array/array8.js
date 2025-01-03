class Solution {
  removeDuplicates(arr) {
    let dublicateValue = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > dublicateValue) {
        dublicateValue=arr[i]
        result.push(arr[i]);
      }
    }
    return result;
  }
}

const SolutionClass = new Solution();
const arr =  [2, 2, 2, 2, 2]
console.log(SolutionClass.removeDuplicates(arr));
