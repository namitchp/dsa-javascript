// Given an array arr[], check whether it is sorted in non-decreasing order. Return true if it is sorted otherwise false.

class Solution{
    arraySortedOrNot(arr) {
        // code here
        for(let i=0;i<arr.length;i++){
            if( arr[i]<arr[i-1]){
             return false
            }
        }
        return true;
    }
}

const solutionClass = new Solution();
const arr = [70, 80, 100, 200];
console.log(solutionClass.arraySortedOrNot(arr));
