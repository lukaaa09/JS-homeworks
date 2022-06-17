function mix(...args){
    if(!args.every(value => typeof value === 'function')){
        throw new Error("every parameter should be a callback")
    }
    let errors = []
    let callback = args[0]
    let firstElement = callback()
    for(let i = 1; i < args.length; i++){
        let element = args[i];
        try {
            firstElement =  element(firstElement)
        } catch (error) {
            errors.push(
                {
                    name: error.name,
                    message: error.message,
                    stack: error.stack,
                    level: i
                }
            )
        }
    }
    return {errors, firstElement}
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