function f(arr){
     if(arr.constructor !== Array){
        throw new TypeError("parameter should be an array")
    }    
    else if(arr.length <= 0){
        throw new Error("parameter cant be an empty")
    }
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            throw new Error("parameter type should be array of numbers")
        }
        console.log(arr[i])        
    }
    
}
try{
    console.log(f([1, 9, 20, 8000]))
}catch(err){
    console.log(err.message)
}