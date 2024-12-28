// We can check the remainder when divided by 2. If the remainder is 0, the number is even; otherwise, it is odd

function isEvenOrOdd(num){
    if(!num)
        return "Please Enter Valid Number";
    if(num%2===0)
        return 'even';
        return 'Odd';


}

console.log(isEvenOrOdd(8));