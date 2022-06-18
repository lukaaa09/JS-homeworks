let mix =(...args) => {
    if(!args.every(value => typeof value === 'function')){
        throw new Error("every parameter should be a callback")
    }
    let callback = args[0]
    let result = callback()
    for(let i = 1; i < args.length; i++){
        let element = args[i]
        result =  element(result)
    }
    return result
}
console.log(mix(
    () => 0,
    (prev) => prev + 1,
    (prev) => prev + 2,
    (prev) => prev + 12,
    (prev) => prev + 2
  
)) 

