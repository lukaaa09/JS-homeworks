function mix(...args){
    let result1 = {value: null, errors: []} 
    args.forEach((cb, i) => {
        if(typeof cb !== 'function'){
            throw new Error("every parameter should be a callback")
        }try{
            result1.value = cb(result1.value);
        }catch(err){
            result1.errors.push({
                name: err.name,
                stack: err.stack,
                message: err.message,
                level: i,
            })
        }
        
    }) 
    return result1
}
        
const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 5;
}, (prev) => {
    throw new RangeError('warning message');
}, (prev) => {
    return prev * 3;
});
console.log(result)