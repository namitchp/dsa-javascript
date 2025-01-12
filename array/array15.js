// Given an array, arr[]. Sort the array using bubble sort algorithm.

class Solution {
  // Function to sort the array using bubble sort algorithm.
  bubbleSort(arr) {
    // code here
    const l = arr.length;
    for (let i = 0; i < l - 1; i++) {
      let short = false;
      for (let j = 0; j < l - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp;
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          short = true;
        }
      }
      if (!short) {
        break;
      }
    }
    return arr;
  }
  recursion(i) {

    if (i === 0){
   console.log('hello namit',i);

      return "89";

    }
    console.log('hello namit',i);

    this.recursion(i-1);
   console.log('hello namit');
  }
}

const solutionClass = new Solution();
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(solutionClass.bubbleSort(arr));
console.log(solutionClass.recursion(3));
