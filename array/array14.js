// Insertion Sort Algorithm

class Solution {

    // Please change the array in-place
    insertionSort(arr) {
        const l=arr.length;
        let temp;
        for(let i=1; i<l;i++){
            temp=arr[i];
            let j=i-1;
            while(j>=0 && arr[j]>temp){
                arr[j+1]=arr[j]
                j--;
            }
            arr[j+1]=temp;
        }

        return arr;
    }
}

const solutionClass=new Solution();
const arr=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(solutionClass.insertionSort(arr));