// class solution{
//     getAlternates(arr) {
//         let arr1=[];
//         for(let i=1;i<arr.length;i+=2){
//              arr1.push(arr[i]);
//         }
//        return arr1
//     }
// }
// let arr=[10,20,30,90,23,45,89]
// const solutionClass= new solution();
// console.log(solutionClass.alternet(arr));


//recursive method
function recursionFunction(arr,ind,res){
    if(ind<arr.length){
        res.push(arr[ind]);
        recursionFunction(arr,ind+2,res)
    }

}

function getAlternates(arr) {
   
let res=[];
let ind=0;
 recursionFunction(arr,ind,res);
return res

}

let arr=[10,20,30,90,23,45,89];
console.log(getAlternates(arr));