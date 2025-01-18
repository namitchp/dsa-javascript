
class Solution {
    quickSort(arr, low, high){
        if(low<high){
            let pi = this.partition(arr, low, high);
            this.quickSort(arr, low, pi-1);
            this.quickSort(arr, pi+1, high);
        }
    }
    partition(arr, low, high){
        let pivot = arr[high];
        let i = low-1;
        for(let j=low; j<high; j++){
            if(arr[j]<pivot){
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        let temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
        return i+1;
    }
    maxProduct(arr) {
      // your code here
      const l = arr.length;
      if(l<3)
        return -1;
 
this.quickSort(arr, 0, l-1);
      return Math.max(arr[0] * arr[1] * arr[l - 1],arr[l - 1] * arr[l - 2] * arr[l - 3]);
        //   return arr[0]*arr[1]*arr[2] ;
    }

  }

const solutionClass = new Solution();
console.log(solutionClass.maxProduct([-10, -3, 5, 6, -20]));
