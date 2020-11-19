//scope part 01; block-scope
//variable inside of the function.

/*
function sum (first, second) {
    let result = first + second;
    // console.log(result);
    return result;
}

const output = sum(5, 10);
// console.log(result);// error result;
console.log(output);
*/

//scope part 02; global scope
//variable outside of the function.
/*
let bonus = 20;//global variable
function sum (first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);
*/

//scope another part

let bonus = 20;//global variable
function sum (first, second){
    let result = first + second + bonus;
    // console.log(bonus);
    if(result > 9){
        let mood = "Happy";//when you declare a variable with 'const' or 'let', you can't access it outside of the if block.
        mood = "Sad";
        mood = "Fishy";
        // var mood = "Happy"; // but with 'var' everything is 'maaf' according to the old testament of JS. you can access it outside of the if,else block. If you use 'var', it's hoisted up the result.
        // console.log(mood);
    }
    // console.log(mood);//error
    console.log(day);//undefined ==> when a variable is declared, only declaration part will be hoisted up not the value of the declared variable.
    //hoisiting = declaration part.
    // var day = "Thrusday";
    let day = "Thrusday";
    // console.log(day);//you will see the result.
    return result;
}

const output = sum(3, 7);
// console.log(bonus);
// console.log(output);
