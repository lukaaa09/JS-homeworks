function f(arr){
     if(arr.constructor !== Array){
        throw new TypeError("parameter should be an array")
    }    
    else if(arr.length <= 0){
        throw new Error("parameter cant be an empty")
    }
    for(let i = 0; i < arr.length; i++){
        if(!arr.every(value => typeof value === 'number')){
            throw new Error("parameter type should be array of numbers")
        }
        console.log(arr[i])        
    }
    
}
try{
    f([1000, 2000, 7000, 10000, 20000])
}catch(err){
    console.log(err.message)
}