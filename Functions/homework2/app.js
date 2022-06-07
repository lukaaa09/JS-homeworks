function f(arr){
     if(arr.constructor !== Array){
        throw new TypeError("parameter should be an array")
    }    
    else if(arr.length <= 0){
        throw new Error("parameter cant be an empty")
    }else if(!arr.every(value => typeof value === 'number')){
        throw new Error("parameter type should be array of numbers")
    }
    for(let i = 0; i < arr.length; i++){
            console.log(arr[i])        
    }
    
}
try{
    f([1000, 2000, 3500, 7800, 9000])
}catch(err){
    console.log(err.message)
}