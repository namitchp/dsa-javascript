// Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.


class Solution{
    reverseArray(arr) {
        // your code here
        const l=arr.length-1;
        const result=[];
        for(let i=l;i>=0;i--){
          result[l-i]=arr[i];
        }
        for(let i=0;i<=l;i++){
            arr[i]=result[i];
          }
        return arr;

    }
}

const solutionClass = new Solution();
const arr = [70, 80, 100, 200];
console.log(solutionClass.reverseArray(arr));
