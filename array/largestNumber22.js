var largestNumber = function (nums) {
  let largest='';
  for (let i = nums.length-1; i >= 1; i--) {
    if (i === 1) {
      largest = largest + nums[i - 1] + nums[i];
      return largest;
    }
    largest += nums[i];
  }
};
console.log(largestNumber([10,2])); // "9534330"
