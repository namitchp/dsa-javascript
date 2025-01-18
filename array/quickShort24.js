class Solution{
    quickSort(arr, low, high){
        if(low<high){
            let pi = this.partition(arr, low, high);
            this.quickSort(arr, low, pi-1);
            this.quickSort(arr, pi+1, high);
        }
    }
    partition(arr, low, high){
        let pivot = arr[high];
        let i = low;
        for(let j=low; j<=high; j++){
            if(arr[j]<=pivot){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
            }
        } 
        return i-1;
    }

    returnFunction(arr){
        this.quickSort(arr, 0, arr.length-1);
        return arr;
    }
}

const solutionClass = new Solution();
const arr = [10, 7, 8, 9, 1, 5];
console.log(solutionClass.returnFunction(arr));