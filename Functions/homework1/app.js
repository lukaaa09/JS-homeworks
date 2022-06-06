function getDivisors(num){
    if(num === 0){
        throw new Error("parameter should be greater than zero")
    } else if(typeof num !== "number"){
        throw new TypeError("every parameter should be a number")
    }    
    let newArray = []
    for(let i = 0; i < num; i++){
        if(num % i == 0){
          newArray.push(i)
        }
    }     
    return newArray    
}
try{
    console.log(getDivisors(0));
}catch(err){
    console.log(err.message)
}