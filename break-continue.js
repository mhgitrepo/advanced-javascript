//break

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i]);
//     if(nums[i] > 5){
//         break;
//     }
//     console.log(nums[i]);
// }

//continue

const nums = [1, 2, -3, 4, -5, 6, -7, 8, 9];
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    if(nums[i] < 0){
        continue;
        // break;
    }
    console.log(nums[i]);
}