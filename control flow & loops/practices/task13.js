// You have array `[1, 2, 5, 9, 4, 13, 4, 10]`. Using loop `for` and operator `if`,
// check if we have an element with value 4. If we have, print to console "Exist!" and stop loop execution. 
// if we dont, dont print anything.
let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 4){
        console.log('exist')
        break;
    }
}