// Given an array arr. The task is to find the largest element in the given array. 
class Solution{
    largest(arr){
        let largest=0;
     for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            largest=arr[i];
        }
     }
     return largest
    }
}

const soutionClass=new Solution();
const arr=[1, 56, 3, 4];
console.log(soutionClass.largest(arr))