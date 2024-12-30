class Solution{
    search(arr,x){
     for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }
     }
     return -1
    }
}

const soutionClass=new Solution();
const arr=[1, 2, 3, 4];
console.log(soutionClass.linearSearch(arr,4))