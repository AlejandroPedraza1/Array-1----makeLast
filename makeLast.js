//This is the JavaScript answer for this problem
function makeLast(nums){
  const arr = [];
  for (let i = 0; i < nums.length * 2 - 1; i++) {
    arr == arr.push(0);
  }
  let last = nums[nums.length - 1];
  arr.push(last);
  
  return arr;
}
