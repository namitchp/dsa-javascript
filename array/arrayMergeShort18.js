class Solution {
  merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) L[i] = arr[left + i];
    for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    let i = 0,
      j = 0;
    let k = left;

    // Merge the temp arrays back into arr[left..right]
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  mergeSort(arr, left, right) {
    if (left >= right) return;

    const mid = Math.floor(left + (right - left) / 2);
    this.mergeSort(arr, left, mid);
    this.mergeSort(arr, mid + 1, right);
    this.merge(arr, left, mid, right);
  }
  returnFunction(arr) {
    this.mergeSort(arr, 0, arr.length - 1);
    return arr;
  }
}

const solutionClass = new Solution();
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(solutionClass.returnFunction(arr));
