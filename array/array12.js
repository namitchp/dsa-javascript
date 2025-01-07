// Given an array, generate all the possible subarrays of the given array using recursion.

class Solution {
    getSubArrays(arr) {
    const l = arr.length;
    const result = [];
    for (let i = 0; i < l; i++) {
    //   result.push([arr[i]]);
    //   
    //   if(i===l-1)
    //     break;
      for (let j = i; j < l; j++) {
        const subresult = [];
        for (let k = i; k <= j; k++){
        subresult.push(arr[k]);
        }
      result.push(subresult);
      }
    }
return result;
  }
}
const solutionClass = new Solution();
const arr = [1, 2, 3];
console.log(solutionClass.getSubArrays(arr));
