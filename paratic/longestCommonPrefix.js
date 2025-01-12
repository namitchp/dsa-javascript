var longestCommonPrefix = function(strs) {
    const l=strs.length;
     let prefix=strs[0];
    for(let i=1;i<l;i++){
     const sortArray=strs[i];
      while(sortArray.indexOf(prefix) !==0){
        prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
      }
    //   console.log(prefix)
    }
    return prefix;
};


console.log(longestCommonPrefix(["flower","flow","flor"]))