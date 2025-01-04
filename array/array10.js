


class Solution{
    binarysearch(arr, k) {
        // Code Here
        let start=0;
        let end= arr.length-1;
        let mid;
        while(end>=start){
           mid= start + Math.floor((end - start) / 2);
            // console.log(mid)
            if(arr[mid]===k){
                return mid
            }
            if(arr[mid]>k){
                end=mid-1;
            }else{
                start=mid+1
            }
        }
        return -1
    }
}

const solutionClass=new Solution();
const arr = [1, 1, 1 ,2 ,2, 3, 3, 3 ,3, 3, 3 ,4 ,4 ,4 ,5 ,5 ,5]
 const k = 3
console.log(solutionClass.binarysearch(arr,k))