// Given an array arr[] of positive integers and another integer target. Determine if there exists two distinct indices such that the sum of there elements is equals to target.

class Solution {
    twoSum(arr, target) {
        // code here
const length = arr.length;
for(let i=0;i<length;i++){
    for(let j=i+1;j<length;j++){
    if(arr[i]+arr[j]===target)
        return true;
    }
}
return false;
    }
}

const solutionClass=new Solution();
console.log(solutionClass.twoSum([1, 4, 45, 7, 10, -8], 16)); // true


// twoSum(arr, target)
// {
//     // Sort the array
//     arr.sort((a, b) => a - b);

//     let left = 0, right = arr.length - 1;

//     // Iterate while left pointer is less than right
//     while (left < right) {
//         let sum = arr[left] + arr[right];

//         // Check if the sum matches the target
//         if (sum === target)
//             return true;
//         else if (sum < target)
//             left++; // Move left pointer to the right
//         else
//             right--; // Move right pointer to the left
//     }
//     // If no pair is found
//     return false;
// }
