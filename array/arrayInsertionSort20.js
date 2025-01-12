class Solution {
  // swap(arr, i, j) {
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  // }
  SelectionSort(arr) {
    if (!arr.length) {
      return 'namit';
    }
    const l = arr.length;
    for (let i = 1; i < l; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (arr[j] > temp && j >= 0) {
        arr[j + 1] = arr[j];
        j--
        // arr[j]
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
}

const solutionClass = new Solution();
console.log(solutionClass.SelectionSort([64, 25, 12, 22, 0]));
