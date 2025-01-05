class Solution {
    simpleInterest(P, R, T) {
        // code here
        return ((P * R * T) / 100).toFixed(2);
    }
}

const soutionClass = new Solution();

const P = 1000;
const R = 5;
const T = 2;
console.log(soutionClass.simpleInterest(P, R, T)) // 100