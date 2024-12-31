// You are given an array arr[], you need to find the top three largest distinct integers present in the array and return an array of size three in descending order.

class Solution {
  getThreeLargest(arr) {
    let first = 0;
    let second = 0;
    let third = 0;
    for (let i = 0; i < arr.length; i++) {
      if (first < arr[i]) {
        first = arr[i];
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (second < arr[i] && first !== arr[i]) {
        second = arr[i];
      
      }
    }
      for (let i = 0; i < arr.length; i++) {
      if (third < arr[i] && first !== arr[i] && second !== arr[i]) {
        third = arr[i];
      }
    }
    const shortData = [];
    if (first) {
      shortData.push(first);
    }
    if (second) {
      shortData.push(second);
    }
    if (third) {
      shortData.push(third);
    }

    return shortData;

    //   if(first && second && third)
    //     return [first,second,third]
  }
}

const solutionClass = new Solution();
let arr = [8 ,10, 9 ,1, 3 ,3 ,10 ,2 ,7];
console.log(solutionClass.getThreeLargest(arr));
 