// Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

class Solution {
  pushZerosToEnd(arr) {
    // code here
    const l = arr.length;
    let j = 0;
    const tempArray = [];
    for (let i = 0; i < l; i++) {
      if (arr[i] !== 0) tempArray[j++] = arr[i];
    }
    while (j < l) tempArray[j++] = 0;

    for (let i = 0; i < l; i++)
    arr[i] = tempArray[i];

    return arr;
  }
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];

const solutionClass = new Solution();
console.log(solutionClass.pushZerosToEnd(arr));
