class Solution {
  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  SelectionSort(arr) {
    if(!arr.length){
        return 'namit'
    }
    const l = arr.length;
    for (let i = 0; i < l; i++) {
      let temp = i;
      let j = i + 1;
      while ( j < l) {
        if (arr[j]<arr[temp]) temp = j;
        j++
      }
      this.swap(arr, i, temp);
    }
    return arr;
  }
}

const solutionClass = new Solution();
console.log(solutionClass.SelectionSort([64,25,12,22,0]));
