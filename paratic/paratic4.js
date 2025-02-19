// Given two integers n and m. The problem is to find the number closest to n and divisible by m. If there is more than one such number, then output the one having the maximum absolute value.

class solution {
  closestNumber(n, m) {
    if (n < 0 && m < 0) {
        const closest= Math.round(n*-1/m*-1)*m*-1;
        return closest?closest*-1:closest;
         }
    if (n < 0) {
   const closest= Math.round(-1*n/m)*m;
   return closest?closest*-1:closest;
    }
    if (m < 0) {
        const closest= Math.round(n/m*-1)*m*-1;
        console.log(closest)
        return closest;
         }

    return Math.round(+n/+m)*+m;
    // code here
    // return typeof 34;
    //  return13
  }
}
const solutionClass = new solution();
console.log(solutionClass.closestNumber(39, -6));
