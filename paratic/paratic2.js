// Given a number n, we need to print its table. 

class solution{

    getTable(n){
        const arr=[];
        for(let i=1;10>=i;i++){
            // console.log(n*i);
            arr.push(n*i)
        }
        return arr;
    }
}

const solutionClass=new solution();
console.log(solutionClass.getTable(4));
