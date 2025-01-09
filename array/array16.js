// Given an array arr, use selection sort to sort arr[] in increasing order.
class Solution {
  // /**
  //  * @param {number[]} arr
  //  * @returns {number[]}
  //  */

  // Function to implement selection sort
  selectionSort(arr) {
    // your code here
    const l = arr.length;
    for (let i = 0; i < l; i++) {
      let smallestValueINdex = i;
      for (let j = i + 1; j < l; j++) {
        if (arr[j] < arr[smallestValueINdex]) {
          smallestValueINdex = j;
        }
      }
      if (smallestValueINdex != i) {
        let temp = arr[i];
        arr[i] = arr[smallestValueINdex];
        arr[smallestValueINdex] = temp;
      }
    }
    return arr;
  }
}

const solutionClass = new Solution();
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(solutionClass.selectionSort(arr));
