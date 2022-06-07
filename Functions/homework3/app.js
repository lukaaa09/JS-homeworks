// function genericFunction(func){
//     try{
//         func()
//     }catch(err){
//         console.log(err.message)
//     }
// }
// function sum(){
//     let num = 20
//     if(num < 10){
//         num++
//     }else{
//         throw new TypeError("num should be lower than 10")
//     }
// }
// try{
//     genericFunction(sum)
// }catch(err){
//     console.log(err.message)
// }
function genericFunction(func){
    try{
        func("luka")
    }catch(err){
        console.log(err.message)
    }
}
function isNum(number){
    if(typeof number !== 'number'){
        throw new TypeError("parameter should be a number")
    }else(
        console.log(number)
    )
}
genericFunction(isNum);
