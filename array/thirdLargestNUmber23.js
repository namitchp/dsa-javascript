
// both code in this file ascinding and descinding
// class Solution {
//   thirdLargest(arr) {
//     // your code here
//     const l = arr.length;
//     if(l<=2)
//       return -1;

//     for (let i = 0; i < l; i++) {
//       let tempIndex = i;
//       let j = i + 1;
//       while (j < l) {
//         if (arr[j] > arr[tempIndex]) tempIndex = j;
//         j++
//       }
//       if (arr[i] !== arr[tempIndex]) this.swap(arr, i, tempIndex);
//     }
//         return arr [2];
//   }
//   swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// }
class Solution {
    thirdLargest(arr) {
      // your code here
      const l = arr.length;
      if(l<=2)
        return -1;
      for (let i = 0; i < 3; i++) {
        let tempIndex = i;
        let j = i + 1;
        while (j < l) {
          if (arr[j] > arr[tempIndex]) tempIndex = j;
          j++
        }
        if (arr[i] !== arr[tempIndex]) this.swap(arr, i, tempIndex);
      }
          return arr ;
    }
    swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

const solutionClass = new Solution();
console.log(solutionClass.thirdLargest([-10, -3, -5, -6, -20]));
