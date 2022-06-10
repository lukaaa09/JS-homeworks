// #### Task 3

// Create function `rotate`, which will rotate array based on given parameters.

// params:
//   array - required - target
//   number - required - count(how many times) to rotate array
//   string - optional - rotate direction: left or right. defualt is right

// - function should contain checks:
//   - first parameter required and has to be only array
//   - second parameter required and has to be number
//   - third parameter optional and has to be only string

// - creating new array is not allowed

// ```javascript
// const arr = [1,2,3];
// rotate(arr, 1, 'left');  // result: [2,3,1]
// rotate(arr, 1);  // result: [3,1,2]
// rotate(arr, 2);  // result: [2,3,1]

let arr = [1,2,3]
let num = 2
function rotate(arr, num, d="right"){
    if(arr.constructor !== Array){
        throw new TypeError("first parameter should be an array")
    }else if(typeof num !== 'number'){
        throw new TypeError("second parameter should be a number")
    }else if(d !== 'right' && d !== 'left'){
        throw new TypeError("third parameter should be only string")
    }  
for(let i = 0; i < num; i++){    
    if(d === "right"){
        arr.unshift(arr.pop())
    }else{
        arr.push(arr.shift());
    }  
     
}
return arr
}
try{
console.log(rotate(arr, num, "left"))
}catch(err){
    console.log(err.message)
}
