class Solution {
  leaders(a) {
    // code here
    const result = [];
    const l = a.length;
    for (let i = 0; i < l; i++) {
        let j;
      for ( j = i + 1; j < l; j++) {
        if (a[i] < a[j]) break;
      }
      if(j==l)
    //   result.push(a[i]);
result[result.length]=a[i]
    }
    return result;
  }
}

const solutionClass = new Solution();
const arr = [16, 17, 4, 3, 5, 2];
console.log(solutionClass.leaders(arr));
