// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Given an array arr. The task is to find the largest element in the given array.
// class Solution{
//     getSecondLargest(arr){
//         let n=arr.length;
//         arr.sort((a,b)=>a-b);
//      for(let i=n-2;i>=0;i--){
//         if(arr[i]!== arr[n-1]){
//           return arr[i];
//         }
//      }
//      return -1
//     }
// }

// const soutionClass=new Solution();
// const arr=[1, 56, 3, 4];
// console.log(soutionClass.getSecondLargest(arr))

//second case

class Solution {
  getSecondLargest(arr) {
    let first = -1;
    let second = -1;
    for (let i = 0; i < arr.length; i++) {
      if (first < arr[i]) {
        first = arr[i];
      }
      if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
    }
    }
    return second;
  }
}

const soutionClass = new Solution();
const arr = [1, 41,41];
console.log(soutionClass.getSecondLargest(arr));
