//Array Slice
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(3, 6); //start after(index) , end before(index)

console.log(part);
console.log(nums);//original array won't be changed.
*/

//Array Splice
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = nums.splice(4, 2); //start after(index), delete count(indexing starts from 'start after' count)
//items injecting
const removed = nums.splice(4, 2, 80, 90, 95);
console.log(removed);
console.log(nums);
*/


//Array Join

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const together = nums.join("-");

console.log(together);