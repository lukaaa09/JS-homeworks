// You have number `const n=1000`. Divide it by 2 as many times as long as the result of the division is greater than 50. 
// What is the number? Count the number of iterations required for this (iteration is a loop pass), and write it to the variable `let num`. 
// Show the result to console.

const n = 1000;
let num = 0;
let i = n;
while(i > 50){
    i = i / 2;
    if(i > 50){
        num++
    }
}
console.log(num)