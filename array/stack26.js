// Check if an array is subset of another array

class Solution {
  isSubset(a, b) {
    const la = a.length;
    const lb = b.length;
    let present = false;
    for (let i = 0; i < la; i++) {
      for (let j = 0; j < lb; j++) {
        if (a[i] === b[j]) {
          present = true;
          break;
        }
      }
      if (!present) return false;
    }
    return true;
  }
}

const SolutionClass = new Solution();
const a = [10, 5, 2 ,23 ,19];
const b = [19, 5, 3];
console.log(SolutionClass.isSubset(a, b));
