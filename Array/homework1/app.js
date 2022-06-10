// #### Task 1

// Create function `f`. This function gets one parameter: one dimensional or multidimensional array. This function returns the sum of all elements from all dimensions.

// Note that the function should return the 0, if during the calculation of all levels (dimensions) no number was found.

// Function should contain next checks:

// - Parameter is required and has to be only array.
// - Throw error if on any dimension (level) you found not a number or not a array.

// - using flat, flatMap is not allowed.

// ```javascript
// const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
// const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
// const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
// const arr4 = [[[[[]]]]];
// f(arr4); // 0
// const arr5 = [[[[[],3]]]];
// f(arr5); // 3

let arr = [[[[[12]]]],30, 13, [[[[[10,]]]]]] 
function f(arr) {
    if(arr.constructor !== Array){
        throw new TypeError("parameter should be an array")
    }
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'object')
        sum += f(arr[i]);
      else if(typeof arr[i] === "number" )
        sum += arr[i];
         else{
             throw new Error("warning message")
         }
    }
    return sum;
}  
try{
console.log(f(arr));
}catch(err){
    console.log(err.message)
}
