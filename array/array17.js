
class Solution {


    partition(arr, low, high) {
        // Your code here
        const l=arr.length;
        const pre=arr[low]
        let i=low;
        let j=high;

      

        while(i<j){

            while(arr[i]<=pre) i++;
            while(arr[j]>pre) j--;

            if(i<j)
           this.swap(arr,i,j)

        }
        this.swap(arr,j,low);
        return j


    }

    swap(arr,i,j){
        let temp=arr[i];
         arr[i]=arr[j]
         arr[j] =temp;

     }

    quickSort(arr, low, high) {
        if(low<high){
            const prev=this.partition(arr,low,high);
            this.quickSort(arr,low,prev-1);
            this.quickSort(arr,prev+1,high);
        }
       
    }
    returnValue(arr,low,high){
        this.quickSort(arr,low,high);
        return arr;
    }

}




const solutionClass = new Solution();
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(solutionClass.returnValue(arr,0,9));
