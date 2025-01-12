var reverse = function (x) {
  let typeOf =false;
  if (x < 0) {
    typeOf = true;
    x=-x;
  }
  if(x<=2**31-1){

  
  let reverse = 0;
  while (x !== 0 ) {
    let reminder = x % 10;
    reverse = reverse * 10 + reminder;
    x = Math.floor(x / 10);
  }
//   console.log(reverse)
//   console.log(typeOf)
if(reverse<=2**31-1){
    if (typeOf) 
        return -reverse;
      
    
      return reverse;
}

}

    return 0

};

console.log(reverse(1534236469));
