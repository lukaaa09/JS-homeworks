// #### Task 2

// Create function `reverse`, that gets array as parameter and returns array in opposite order.

// Function should contain next checks:

// - Parameter required and has to be only array
// - Throw error if passed empty array
// - Creating new array is not allowed
// - Using Array.reverse is not allowed

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]

const arr = [1, 2, 3, 4, 5, 40, 7, 99, 6, 7, 8, 9, 1111];
function Reverse(arr){
  if(arr.constructor !== Array){
    throw new TypeError("parameter should be an array")
}    
  else if(arr.length <= 0){
      throw new Error("parameter shuld not be an empty")
  }else if (arr.length > 1) {
    const main = arr.shift();
    const reverse = Reverse(arr);
    reverse.push(main)
    return reverse;
  }
  return arr;  
};
try{
console.log(Reverse(arr));
}catch(err){
    console.log(err.message)
}
