class Solution {
//   removeDuplicates(arr) {
//     let dublicateValue = 0;
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > dublicateValue) {
//         dublicateValue=arr[i]
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
removeDuplicates(arr) {
    const n = arr.length;
    if (n <= 1)
        return n;
    
    // Start from the second element
    let idx = 1; 
    for (let i = 1; i < n; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];
        }
    }

    return idx;
}
}

const SolutionClass = new Solution();
const arr =  [1,2, 3,3]
console.log(SolutionClass.removeDuplicates(arr));
