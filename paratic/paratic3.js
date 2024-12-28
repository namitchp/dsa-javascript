// Given an integer n, your task is to compute the sum of all natural numbers from 1 to n (inclusive). If n is 0, the sum should be 0.

class solution {

    sumOfNaturalNo(n){
     let sum=0;
     for(let i=1; n>=i;i++){
        sum=i+sum;
     }
     return sum;
    }
}

const solutionClass=new solution();
console.log(solutionClass.sumOfNaturalNo(6));