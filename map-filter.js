const numbers = [3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

//map
// function square (element){
//     return element * element;
// }

// numbers.map(square);
// const square = (element) => element * element;
/* Or*/
// const square = x => x * x;
/*
numbers.map(function(element, index, array){
    // console.log(element, index, array); //map funtion contains 3 parameters;
    return element * element;
})
*/
/*
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);
*/

// numbers.map(function square (element){
//     return element * element;
// })

// console.log(output);

// shortcut Map
// const result = numbers.map(x => x * x);
// console.log(result);



/* Filter */
// const bigger = numbers.filter(x => x >5);
// const smaller  = numbers.filter(x => x < 5);
const smaller  = numbers.filter(x => x < 3);
console.log(smaller);

/* Finder */
// const isThere = numbers.find(x => x > 5);
// const isThere = numbers.find(x => x >= 5);
const isThere = numbers.find(x => x < 5);
console.log(isThere);